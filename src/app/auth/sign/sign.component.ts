import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service.service';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  MaxDate;
  onSubmit(form:NgForm)
  {
    this.authservice.registerUser({
      email:form.value.email,
      password:form.value.password
    }); 
  }
  ngOnInit()
  {
    this.MaxDate=new Date();
    this.MaxDate.setFullYear(this.MaxDate.getFullYear()-18);
  }
}
