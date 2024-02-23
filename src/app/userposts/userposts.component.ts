import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css'] // corrected styleUrls
})

export class UserpostsComponent implements OnInit {
  users: any[] = []; // Define users array
  errorMessage: string = ''; // Define errorMessage
  posts: string[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
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


 



