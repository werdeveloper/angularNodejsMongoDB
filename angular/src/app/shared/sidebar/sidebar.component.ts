import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.userName();
  }

  userName(): string {
      const nameame = this._authService.getUserInfo();
      return name['name'];
  }
  logout() {
    this._authService.logout();
    this.router.navigate(['/login']);
  }
}
