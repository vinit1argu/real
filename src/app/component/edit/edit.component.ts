import { Component,ViewChild, OnInit,Inject } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  // gender = [
  //   {id: '1', value: 'Male'},
  //   {id: '2', value: 'Female'}
  // ]
  
  // @ViewChild('myForm') form!: NgForm;


  item: any={};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.dataService.getDataForEdit(+params['id']).subscribe((data) => {
        this.item = data;
        // console.log(data);
      });
    })

      
    // this.route.params.subscribe((params) => {
    //   const id = params['id']; 
    //   this.dataService.getDataForEdit(+id).subscribe((data) => {
    //     this.item = data;
    //     // console.log(data);
    //   });
    // });
}
}
