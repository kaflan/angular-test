import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {BlocksViewComponent} from './blocks-view/blocks-view.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {TableViewComponent} from './table-view/table-view.component';
import {AuthGuardService} from './services/auth/auth-guard-service.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'signIn', pathMatch: 'full',
  },
  {
    path: 'signIn', component: AuthComponent
  },
  {
    path: 'upload', component: ImageUploadComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'table', component: TableViewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'block', component: BlocksViewComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
