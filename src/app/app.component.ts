import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
 
  title = 'LP_User_Register';

  userObj :USER =new USER();

  http=inject(HttpClient)
  cityList$:Observable<string[]> = new Observable<string[]>();

  ngOnInit(): void {
  this.cityList$ = this.http.get<string[]>('http://localhost:3000/cityList');
  }
  getCity(){

  }
}
export class USER {
  userId: number;
  username: string;
  Fname: string;
  Lname: string;
  city: string;
  state: string;
  zipcode: string;

  constructor() {
    this.userId = 0;
    this.username = '';
    this.Fname = '';
    this.Lname = '';
    this.city = '';
    this.state = '';
    this.zipcode = '';
  }
}
