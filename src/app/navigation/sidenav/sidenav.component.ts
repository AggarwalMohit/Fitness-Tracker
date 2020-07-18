import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose:EventEmitter<void>=new EventEmitter();
  isAuth:boolean;
  authSubscription:Subscription;
  constructor(private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.authSubscription=this.authService.authChange.subscribe(
      authStatus=>{
        this.isAuth=authStatus;
      }
    );
  }
  sideToggle()
  {
    this.sidenavClose.emit();
  }

  sideToggleButton()
  {
    this.sidenavClose.emit();
    this.router.navigate([''],{relativeTo:this.route});
  }
}
