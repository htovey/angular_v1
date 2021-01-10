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
  public loginStyleClass = 'showMe';

  //private response: HttpResponse<JSON>;

  ngOnInit(){};

  handleLogin(credential: Credential) {
    const loginUrl = "http://localhost:8080"+"/login";
    var tokenBuffer = btoa(credential.username+":"+credential.password);
    const userToken = "Basic "+tokenBuffer;
  
    //this.fetchService.handleGet(loginUrl, userToken).subscribe((data: any)=>{
    this.fetchService.handleGet(loginUrl, userToken)
    .subscribe(response => { 
         if (response.ok) {
          console.log("LoginComponent response for "+credential.username);
          this.handleLoginSuccess(userToken);
        } else {
        this.handleLoginError('Login failed. Please try again.');
        }
      });
  }

  handleLoginSuccess(userToken: string) {
    //this.setState({styleClass: 'hideMe'});
    this.handleSuccess(userToken, false);
    this.loginStyleClass = "hideMe";
  }

  handleLoginError(message: string) {
      console.log('LoginComponent handleError()');
      //if(this.props.openLogin === true) {
        //this.setState({ error: message});
  }

  // handleSuccess(json: JSON, userToken: string, someBoolean: boolean) {
  handleSuccess(userToken: string, someBoolean: boolean) {
    //show user list view
  }
}
