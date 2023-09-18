import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  people = [
    { id:1,name: 'Vinit', address: 'Gandhinagar', dob: '2003-01-11', gender: 'Male' , role:'A' },
    { id:2,name: 'Sakshi', address: 'Azamgarh', dob: '2003-08-20', gender: 'Female',role:'B' },
    {id:3,name:'rohit' ,address: 'delhi' ,dob: '2001-09-21' , gender: 'Male',role:'A'},
    {id:4,name:'gauti' ,address: 'gandhinagar' ,dob:'2000-02-29',gender: 'Fmale',role:'C'}
    
  ];

  editPerson(person: any) {
    
  }

  viewPerson(person: any) {
    
  }


  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


}
