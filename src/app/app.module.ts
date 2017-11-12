import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BlocksViewComponent } from './blocks-view/blocks-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthService} from './services/auth/auth-service.service';
import {AuthGuardService} from './services/auth/auth-guard-service.service';
import {SaveToStorageService} from './services/storage/save-to-storage.service';
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ImageUploadComponent,
    BlocksViewComponent,
    TableViewComponent,
    HeaderComponent,
    FooterComponent,
    SignOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ SaveToStorageService, AuthGuardService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
