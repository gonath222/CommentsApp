import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './service/login.service';
import { TabsComponent } from './tabs/tabs.component';
import { AccountComponent } from './account/account.component';
import { AddcommentsComponent } from './addcomments/addcomments.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewcommentsComponent } from './viewcomments/viewcomments.component';
import { StoreModule } from '@ngrx/store';
import { CommentsReducer } from './comments.store/comments.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    AccountComponent,
    AddcommentsComponent,
    ErrorpageComponent,
    ViewcommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({commentsList: CommentsReducer})
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
