import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddcommentsComponent } from './addcomments/addcomments.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewcommentsComponent } from './viewcomments/viewcomments.component';

const routes: Routes = [
  { path: 'addcomments', component: AddcommentsComponent },
  { path: 'viewcomments', component: ViewcommentsComponent },
  { path: '', component: ViewcommentsComponent },
  { path: 'myaccount', component: AccountComponent },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [AddcommentsComponent, ViewcommentsComponent, ErrorpageComponent, AccountComponent];
