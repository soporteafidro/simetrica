import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: any = {};
  userAuthenticated = new Subject<boolean>();
  private token: string = null;
  private rol: string = null;
  private username: string = null;
  private sponsorID: string = null;
  groups: string[] = [];

  constructor(private amplifyService: AmplifyService, private router: Router) {
    this.groups = ['Admin', 'Supervisor', 'Digitador', 'Lector', 'Medico'];
  }

  getUsername(): string {
    if (this.isAuthenticated()) {
      return this.username;
    } else {
      return 'non_authenticated_user';
    }
  }

  setUserName(username): void {
    this.username = username;
  }

  setToken(token): void {
    this.token = token;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  navigateHome(): void {
    if (this.isAdmin()) {
      this.router.navigate(['admin/home']);
    } else if (this.isReader()) {
      this.router.navigate(['reader/home']);
    }else if (this.isPublic()) {
      this.router.navigate(['consult']);
    } else {
      this.router.navigate(['home']);
    }
  }

  logout(): void {
    this.token = null;
    this.user = null;
    this.rol = null;
    this.username = null;
    this.sponsorID = null;
    this.groups = [];
    this.userAuthenticated.next(false);
    this.amplifyService.auth().signOut();
    this.router.navigate(['/']);
  }

  getUserRole(): any {
    return this.rol;
  }

  setUserRole(rol): any {
    this.rol = rol;
  }

  getUserSponsorId(): any {
    return this.sponsorID;
  }

  setUserSponsorId(sponsorID): any {
    this.sponsorID = sponsorID;
  }

  loginUser(login: string, password: string): Promise<any> {
    return this.amplifyService.auth().signIn(login, password);
  }

  completeNewPassword(password: string): any {
    const { requiredAttributes } = this.user.challengeParam;
    return this.amplifyService
      .auth()
      .completeNewPassword(this.user, password, requiredAttributes);
  }

  sendCodeResetPassword(username: string): any {
    return this.amplifyService.auth().forgotPassword(username);
  }

  completeResetPassword(username: string, password: string, code: string): any {
    return this.amplifyService
      .auth()
      .forgotPasswordSubmit(username, code, password);
  }

  isRoleAuthorized(roles: string[]): boolean {
    const role = this.getUserRole();
    console.log(role, roles);
    if (!role) {
      return false;
    } else {
      return roles.filter((s) => s === role).length > 0;
    }
  }

  isAdmin(): boolean {
    const role = this.getUserRole();
    return role && role.indexOf('Admin') !== -1;
  }

  isPublic(): boolean {
    const role = this.getUserRole();
    return role && role.indexOf('Public') !== -1;
  }

  isReader(): boolean {
    const role = this.getUserRole();
    return role && role.indexOf('Lector') !== -1;
  }

  isSponsorUser(): boolean {
    const role = this.getUserRole();
    return (
      role &&
      (role.indexOf('Digitador') !== -1 ||
        role.indexOf('Supervisor') !== -1 ||
        role.indexOf('Medico') !== -1)
    );
  }

  isDigitizer(): boolean {
    const role = this.getUserRole();
    return role && role.indexOf('Digitador') !== -1;
  }

  isSupervisor(): boolean {
    const role = this.getUserRole();
    return role && role.indexOf('Supervisor') !== -1;
  }

  isMedico(): boolean {
    const role = this.getUserRole();
    return role && role.indexOf('Medico') !== -1;
  }
}
