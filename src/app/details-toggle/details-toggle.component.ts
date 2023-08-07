import { Component } from '@angular/core';

@Component({
  selector: 'app-details-toggle',
  templateUrl: './details-toggle.component.html',
  styleUrls: ['./details-toggle.component.css']
})
export class DetailsToggleComponent {
  showDetails = false;
  secret = 'Secret Password = Fish';
  buttonClicks: string[] = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(`Button Clicked ${new Date().toLocaleTimeString()}`);
  }
}
