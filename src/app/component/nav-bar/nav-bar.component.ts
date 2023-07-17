import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    }
  }
}
