import { Component } from '@angular/core';
import { UserModel } from './model/user.model';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comments App';
  userModel!: UserModel;
  constructor(private loginservice: LoginService) {
    let userdata = localStorage.getItem("userdata");
    if (userdata != null && userdata != "" && userdata !="undefined") {
      this.userModel = JSON.parse(localStorage.getItem("userdata"));
      loginservice.login(this.userModel);
    }
  }

  ngOnInit(): void {

  }
}
