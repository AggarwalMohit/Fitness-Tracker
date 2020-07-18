import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Authdata } from './AuthData.model';
import {Subject} from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange=new Subject<boolean>();
user:User;
  constructor(private router:Router,
    private route:ActivatedRoute) 
  { }
  registerUser(authData:Authdata)
  {
    this.user={
      email:authData.email,
      userID:Math.round(Math.random()*10000).toString()
   };
   this.authChange.next(true);
   this.router.navigate(['./training'],{relativeTo:this.route});
  }
  login(authData:Authdata)
  {
    this.user={
      email:authData.email,
      userID:Math.round(Math.random()*10000).toString()
   };
   this.authChange.next(true);
   this.router.navigate(['./training'],{relativeTo:this.route});
  }
  logout()
  {
    this.user=null;
    this.authChange.next(false);
    this.router.navigate(['./auth/login'],{relativeTo:this.route});
  }
  getUser()
  {
    return {...this.user};
  }
  isAuth()
  {
    return this.user!=null;
  }
}
