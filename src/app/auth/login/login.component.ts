import { Component, OnInit } from '@angular/core';
import { NgForm,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';
import { validate } from 'json-schema';
import { AuthService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('0',{
        validators:[Validators.required,Validators.email]}),
        password:new FormControl('',{
          validators:[Validators.required,Validators.minLength(6)]
        })
    })
  }
  onSubmit(form:NgForm)
  {
    this.authservice.login({
      email:form.value.email,
      password:form.value.password
    }); 
  }

}
