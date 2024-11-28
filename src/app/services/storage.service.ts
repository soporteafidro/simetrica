import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Logger } from 'aws-amplify';
import { CommonFunctionsService } from '../utils/common-functions.service';
import { AuthService } from './auth.service';
import { SisecService } from './sisec.service';
const logger = new Logger('storage');

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private authService: AuthService, private commonFunctionsService: CommonFunctionsService, private router: Router, private sisec: SisecService) { }

  setUser() {
    Auth.currentAuthenticatedUser().then((response) => {
      this.loginUser(response);
    });
  }

  loginUser(response: any): void {
    logger.debug('loginUser response', response);
    this.authService.user = response;
    const userSesion = response.getSignInUserSession();
    if (userSesion) {
      logger.debug('userSesion info', userSesion);
      this.authService.userAuthenticated.next(true);
      this.authService.setToken(userSesion.getAccessToken().getJwtToken());
      this.authService.setUserName(response.username);
      this.authService.setUserRole(userSesion.getAccessToken().decodePayload()['cognito:groups'][0]);
      if (this.authService.isSponsorUser()) {
        this.authService.setUserSponsorId(userSesion.idToken.payload['custom:patrocinador']);
        logger.debug('sponsor id', userSesion.idToken.payload['custom:patrocinador']);
      }
      this.commonFunctionsService.buildMenu();
      this.authService.navigateHome();
    }
    if (response.challengeName) {
      if (response.challengeName === 'NEW_PASSWORD_REQUIRED') {
        this.sisec.hideSpinner();
        this.router.navigate(['/newPassword']);
      }
    }
  }
}
