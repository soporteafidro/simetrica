import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import Amplify, { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

    constructor(private authService: AuthService) { }

    canActivate(pRoute: ActivatedRouteSnapshot, pState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return Auth.currentSession()
            .then(response => {
                const token = response.getAccessToken().getJwtToken();
                if (token) {
                    Amplify.configure({
                        aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
                    });
                } else {
                    Amplify.configure({
                        aws_appsync_authenticationType: 'AWS_IAM',
                    });
                }
                return true;
            }).catch(error => {
                Amplify.configure({
                    aws_appsync_authenticationType: 'AWS_IAM',
                });
                return true;
            });
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
      }
}
