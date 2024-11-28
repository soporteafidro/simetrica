import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../utils/shared.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PrimengModule } from '../utils/primeng.module';
import { StateUserPipe } from './state-user.pipe';
import { StudiesModule } from '../studies/studies.module';

@NgModule({
  declarations: [
    UserEditComponent,
    UsersListComponent,
    AdminHomeComponent,
    CreateUserComponent,
    StateUserPipe
  ],
  imports: [
    SharedModule,
    PrimengModule,
    StudiesModule
  ],
  entryComponents: [UserEditComponent, CreateUserComponent],
  providers: [StateUserPipe]
})
export class AdminModule { }
