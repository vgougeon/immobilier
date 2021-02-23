import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    const login = this.authService.login(this.username, this.password)
    if(login) this.router.navigateByUrl('/')
    else this.error = true
  }

  hack() {
    const login = this.authService.login("Vincent", "azerty31")
    if(login) this.router.navigateByUrl('/')
    else this.error = true
  }
}
