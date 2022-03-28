import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {

  name = new FormControl('');
  age = new FormControl('');
  dateOfBirth = new FormControl(new Date());
  studies = new FormControl('');
  mentor = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  clickAdd(){
    
  }
}
