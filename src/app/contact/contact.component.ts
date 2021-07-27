import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from './model/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // object to be bind
  contactObject:ContactModel={}

  // add contact
  addContact(){
    this.contactService.addNewContact(this.contactObject)
    
    this.contactObject = {}
  }

  // delete contact
  deleteContact(phoneNumber:string){
    this.contactService.deleteContact(phoneNumber)
  }

  // get list of contact
  contactList:ContactModel[]=[]
  getContactList(){
    this.contactList = this.contactService.getContactList()
  }

  // search name
  searchText:any

  constructor(private contactService:ContactService) { 
  }

  ngOnInit(): void {
    this.getContactList()
  }

}
