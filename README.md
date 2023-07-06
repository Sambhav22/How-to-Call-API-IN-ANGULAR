<h2>How to call API in github</h2>
Step 1: Create service with command ng g service services/usersData
<br>
Step 2: Go to services/users-data.services.ts file and write code <br>
<pre>
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
</pre>
<br>
Step 3: Now Go to app.modules.ts file and write
<pre>
  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
</pre>
<br>
Step 4: In app.component.ts file write 
<pre>
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
</pre>


<br>
API will respond the data and display it in the console. Refer ScreenShot
![image](https://github.com/Sambhav22/deploymy/assets/32821939/a18aec8d-a17e-4f6d-b91a-5c742da42823)



