import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe(
        userId => {
          if (userId !== -1) {
            // Handle successful login
            console.log('User ID:', userId);
            // Call the method to insert data into the database
            this.insertLogin();
          } else {
            // Handle login error
            console.error('Login failed');
          }
        },
        error => {
          // Handle subscription error
          console.error('Subscription error:', error);
        }
      );
  }

  insertLogin() {
    // Call the login service to insert data into the database
    // ...
  }
}
