import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Credential } from './model/credential';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() handleSubmit = new EventEmitter<Credential>();
  @Input() credential: Credential;
  
  loginFormGroup: FormGroup;

  public styleClass = 'showMe';

  model = new Credential;
  
  constructor() {}

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
      
      this.handleSubmit.emit(this.model);
      loginForm.reset();
  }

  // get diagnostic() { return JSON.stringify(this.model); }
  // get start() { return this.appFormGroup.get('start')}
  // get end() { return this.appFormGroup.get('end')}
}
