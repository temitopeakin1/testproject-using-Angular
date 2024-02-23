import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'], // Corrected property name
})
export class UserprofileComponent implements OnInit {
  users: any[] = [];
  errorMessage: string = "";
  pageTitle: string = 'dashboard';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getName().subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          this.users = users; // Corrected assignment
        }
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });

    
    this.userService.getPosts().subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          this.users = users;
        }
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
