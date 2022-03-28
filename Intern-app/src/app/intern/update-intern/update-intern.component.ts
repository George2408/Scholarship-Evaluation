import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Intern } from 'src/app/Interfaces/intern';
import { InterServiceService } from 'src/app/Services/inter-service.service';

@Component({
  selector: 'app-update-intern',
  templateUrl: './update-intern.component.html',
  styleUrls: ['./update-intern.component.scss'],
})
export class UpdateInternComponent implements OnInit {
  name = new FormControl("");
  age = new FormControl('');
  dateOfBirth = new FormControl(new Date());
  studies = new FormControl('');
  mentor = new FormControl('');

  @Input() selectedIntern: Intern;
  @Output() emitUpdateStage = new EventEmitter<boolean>();;

  constructor(
    private _service: InterServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.name = new FormControl(this.selectedIntern.name);
    this.age = new FormControl(this.selectedIntern.age);
    this.dateOfBirth = new FormControl(this.selectedIntern.dateOfBirth);
    this.studies = new FormControl(this.selectedIntern.studies);
    this.mentor = new FormControl(this.selectedIntern.mentor);
  }

  clickAdd() {
    const intern: Intern = {
      id: this.selectedIntern.id,
      name: this.name.value,
      age: this.age.value,
      dateOfBirth: this.dateOfBirth.value,
      studies: this.studies.value,
      mentor: this.mentor.value,
    };
    this._service.updateIntern(intern).subscribe();
    this.emitUpdateStage.emit(false);
  }
}
