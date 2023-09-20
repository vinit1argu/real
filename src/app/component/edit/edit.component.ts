import { Component,ViewChild } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
 
  name:string ="";
  address : string = '';
  
  gen:string = '';
  

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]
  
  @ViewChild('myForm') form!: NgForm;

  onSubmit(){
    console.log(this.form);

    this.name = this.form.value.personDetails.name;
    
    this.gen = this.form.value.gender;
   
    this.form.reset();
  }



}
