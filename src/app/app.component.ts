import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sample';
  users: any;
  constructor(private userData: UserDataService) {
    userData.users().subscribe((Data) => {
      console.warn(Data);
    });
  }
}
