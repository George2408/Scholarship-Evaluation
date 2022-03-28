import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Intern } from 'src/app/Interfaces/intern';
import { InterServiceService } from 'src/app/Services/inter-service.service';

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


  constructor(private _service: InterServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  clickAdd(){
    var intern: Intern = {
      name : this.name.value,
      age : this.age.value,
      dateOfBirth : this.dateOfBirth.value,
      studies : this.studies.value,
      mentor: this.mentor.value
    };

    this._service.addIntern(intern).subscribe();
    this._router.navigate(['app-home']);
  }
}
