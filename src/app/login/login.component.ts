import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Credential } from '../model/credential';
import { FetchService } from '../utils/fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ FetchService ]
})
export class LoginComponent implements OnInit {

  @Output() handleSubmit = new EventEmitter<Credential>();
  @Input() credential: Credential;
  
  model = new Credential;
  loginFormGroup: FormGroup;

  public styleClass = 'showMe';
  
  constructor(private fetchService : FetchService) {}

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
        username: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required
        ])
    });
  }

  onSubmit(loginForm: NgForm) { 
    console.log('1 SUBMIT***');
    this.populateModel(loginForm);
    this.handleSubmit.emit(this.model);
    loginForm.reset();
  }

  populateModel(loginForm: NgForm) {
    this.model.username = this.loginFormGroup.get("username").value;
    this.model.password = this.loginFormGroup.get("password").value;
  }

  // get diagnostic() { return JSON.stringify(this.model); }
  // get start() { return this.appFormGroup.get('start')}
  // get end() { return this.appFormGroup.get('end')}
}
