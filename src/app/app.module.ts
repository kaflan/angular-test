import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BlocksViewComponent } from './blocks-view/blocks-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthService} from './services/auth/auth-service.service';
import {SaveToStorageService} from './services/storage/save-to-storage.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ImageUploadComponent,
    BlocksViewComponent,
    TableViewComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ AuthService, SaveToStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
