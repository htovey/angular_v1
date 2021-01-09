import { Component } from '@angular/core';
import { FetchService } from './utils/fetch.service';
import { Credential } from './model/credential';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-page';
  
  constructor(private fetchService: FetchService) {}

  public styleClass = 'showMe';
  Buffer = require('buffer/').Buffer;

  ngOnInit(){};

  handleLogin(credential: Credential) {
    const loginUrl = "http://localhost:8080"+"/login";
    var tokenBuffer = btoa(credential.username+":"+credential.password);
    const userToken = "Basic "+tokenBuffer;
  
    var response = this.fetchService.handleGet(loginUrl, userToken);
    response
    .then(
        response => {
          console.log("LoginComponent response for "+credential.username);
          this.handleLoginSuccess(userToken);
        }
        
    //})  
    )  
    .catch((error) => {
        this.handleLoginError('Login failed. Please try again.');
    });
  }

  handleLoginSuccess(userToken: string) {
    //this.setState({styleClass: 'hideMe'});
    this.handleSuccess(userToken, false);
  }

  handleLoginError(message: string) {
      console.log('LoginComponent handleError()');
      //if(this.props.openLogin === true) {
        //this.setState({ error: message});
  }

  // handleSuccess(json: JSON, userToken: string, someBoolean: boolean) {
  handleSuccess(userToken: string, someBoolean: boolean) {
    alert('SUCCESS!');
  }
}
