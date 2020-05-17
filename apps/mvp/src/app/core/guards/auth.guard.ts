import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MvpLoginService } from '../../features/mvp-login/_services/mvp-login.service';

@Injectable({ 
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private mvpLoginService: MvpLoginService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // const currentUser = this.mvpLoginService.currentUserValue; // TO:DO

        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } } );
        return false;
    }
}
