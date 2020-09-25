import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Client } from '../client';


@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {
/*  civilite:string;
  nom:string;
  prenom:string;
  adresse:string;
  ville:string;
  telephone:string;
  pays:string;
  code_postale:string;
  email:string;
  login:string;
  password:string;
  verif_password:string;*/
  client: Client = null;
  display:boolean;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {

    //VALIADTION
    this.client = new Client(f.value.civilite,f.value.nom, f.value.prenom, f.value.adresse, f.value.ville, f.value.telephone, f.value.pays, f.value.code_postale, f.value.email, f.value.login, f.value.password)
    this.display = true;
    /*this.nom = f.value.nom;
    this.civilite = f.value.civilite;
    this.prenom = f.value.prenom;
    this.adresse = f.value.adresse;
    this.ville = f.value.ville;
    this.telephone = f.value.telephone;
    this.pays = f.value.pays;
    this.code_postale = f.value.code_postale;
    this.email = f.value.email;
    this.login = f.value.login;
    this.password = f.value.password;
    this.verif_password = f.value.verif_password;*/
  }
}
