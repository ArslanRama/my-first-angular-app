import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser = false;
  userStatus = "No user added";
  userName = "";

  ngOnInit(): void {
  }

  constructor() {
    setTimeout(() => {
      this.newUser = true;
    }, 2000);
  }

  createUser() {
    this.userStatus = 'New User Added, User name is ' + this.userName;
  }

  updateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
