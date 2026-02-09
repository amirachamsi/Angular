import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  v1 = "Bonjour girlies";
  v2 = "https://th.bing.com/th/id/OIP.kpmJ-_FPEddx8cyS1AHQlQHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
  v3 = "";
  dis = false;

  alertMessage = 'oupssss'; // Renamed from alert

  fn() {
    alert(this.alertMessage);
  }

  v4 = 10;

  students1 = [
    { id: 1, name: "Amira", age: 22 },
    { id: 2, name: "Sarra", age: 21 },
    { id: 3, name: "Yosra", age: 23 }
  ];

  students2 = [
    { id: 1, name: "Amira" },
    { id: 2, name: "Sarra" },
    { id: 3, name: "Yosra" }
  ];

  st: any; // Explicitly define type
  stude: any; // Explicitly define type
}

