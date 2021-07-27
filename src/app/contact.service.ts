import { ContactModel } from './contact/model/contact.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // array of objects
  contactArray:ContactModel[]=[]

  // add service
  addNewContact(contact:ContactModel){
    //logic for sorting
    
    this.contactArray.push(contact)
  }

  // delete service
  deleteContact(phoneNumner:string){
    this.contactArray.forEach((contact, i) => {
      if(contact.contactNumber === phoneNumner)
        this.contactArray.splice(i, 1)
        alert("Contact deleted")
    });
  }

  constructor() { 
    this.contactArray = [
      {firstName:'Erric', lastName:'Ellot', contactNumber:'222-555-6575'},
    ]
  }

  // return array
  getContactList(){
    return this.contactArray.sort();
  }
}
