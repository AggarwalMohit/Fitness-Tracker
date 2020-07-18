import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() toggleClose:EventEmitter<void>=new EventEmitter();
isAuth:boolean;
authSubcription:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
this.authSubcription=this.authService.authChange.subscribe(
  authstatus=>{
    this.isAuth=authstatus;
  });
  
  }
  sidenavToggle()
  {
    this.toggleClose.emit();
  }
  onLogout()
  {
    this.authService.logout();
  }
}
