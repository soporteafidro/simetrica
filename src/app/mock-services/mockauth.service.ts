import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class MockAuthService {
    token: string = null;
    user: any;
    groups: string[] = [];
    companyIds = '';
    isCompanyAdmin = 'false';
    userAuthenticated = new Subject<boolean>();

    constructor(private amplifyService: AmplifyService, private router: Router) {
    }
    getUsername(): string {
        return 'Sergio Mock Test';

    }
    isAuthenticated(): boolean {
        return true;
    }


}
