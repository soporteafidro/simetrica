import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { SisecService } from 'src/app/services/sisec.service';
import { CommonFunctionsService } from '../common-functions.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent implements OnInit {
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private commonFunctionsService: CommonFunctionsService,
    private sisecService: SisecService,
    private router: Router
  ) {}
  loginSubs;
  isLoggedIn = false;
  items: MenuItem[];

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.commonFunctionsService.optionNavbar.subscribe((menu) => {
      this.items = menu;
    });
    this.authService.userAuthenticated.subscribe((message) => {
      this.isLoggedIn = message;
      this.commonFunctionsService.optionNavbar.subscribe((menu) => {
        this.items = menu;
      });
    });
  }

  goHome(): void {
    if (this.authService.isAdmin()) {
      this.router.navigate(['admin', 'home']);
    } else {
      this.router.navigate(['home']);
    }
  }

  logout(): void {
    this.sisecService.MessageHelpHome.view = true;
    this.authService.logout();
  }
}
