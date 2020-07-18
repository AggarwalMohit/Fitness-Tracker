import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurd implements CanActivate
{
    constructor(private authservice:AuthService,
        private router:Router){}

    canActivate( state: ActivatedRouteSnapshot,
        route: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean 
        {
            if(this.authservice.isAuth())
           {
                return true;
            }
            else
            {
                this.router.navigate(['./auth/login']);
            }

        }
 
}