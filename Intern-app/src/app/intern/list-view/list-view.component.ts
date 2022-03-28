import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/Interfaces/intern';
import { InterServiceService } from 'src/app/Services/inter-service.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  interns: Intern[];
  displayColumns: string[];

  constructor(private _service: InterServiceService) { }

  ngOnInit(): void {
    this._service.getInternsData().subscribe( (interns:Intern[]) =>{
      this.interns = interns;
    });
    this.displayColumns = ['name', 'age', 'dateOfBirth', 'studies', 'mentor', 'delete','update'];
  }

}
