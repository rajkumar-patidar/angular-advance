import { Component } from '@angular/core';
import { Customer } from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  CustomerModel: Customer = new Customer();
}
