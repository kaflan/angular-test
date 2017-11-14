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
import { FileUploadModule } from 'ng2-file-upload';
import { ImagePreview } from './directives/image-preview.directive';
import {HelperService} from './services/Helpers/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ImageUploadComponent,
    BlocksViewComponent,
    TableViewComponent,
    HeaderComponent,
    FooterComponent,
    ImagePreview,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpModule
  ],
  providers: [ SaveToStorageService, AuthGuardService, AuthService, HelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
