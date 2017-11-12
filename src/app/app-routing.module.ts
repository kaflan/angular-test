import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {BlocksViewComponent} from './blocks-view/blocks-view.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {TableViewComponent} from './table-view/table-view.component';
import {AuthGuardService} from './services/auth/auth-guard-service.service';
import {AuthService} from './services/auth/auth-service.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'signIn', pathMatch: 'full'
  },
  {
    path: 'signIn', component: AuthComponent,
  },
  {
    path: 'upload', component: ImageUploadComponent
  },
  {
    path: 'table', component: TableViewComponent
  },
  {
    path: 'block', component: BlocksViewComponent
  },
  {
    path: 'signOut' , redirectTo: 'signIn',
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
