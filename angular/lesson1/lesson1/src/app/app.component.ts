import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1';

  constructor(private HttpClient: HttpClient) {
    console.log('1111')
    this.HttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(currentValue => console.log(currentValue))

  }
}
