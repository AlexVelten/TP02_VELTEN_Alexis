import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {
  nom:string = '';
  prenom:string = '';
  ville:string = '';
  tel:string = '';
  mail:string = '';
  login:string = '';
  mdp:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
