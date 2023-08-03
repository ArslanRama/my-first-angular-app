import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  // Properties
  allowNewServer = false;
  serverCreationStatus = 'no server is created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {}
  onCreateServer (){
    this.serverCreationStatus =  'server is created';
  }
}