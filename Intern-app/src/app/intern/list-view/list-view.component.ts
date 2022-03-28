import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { Intern } from 'src/app/Interfaces/intern';
import { InterServiceService } from 'src/app/Services/inter-service.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  interns: Intern[];
  displayColumns: string[];

  condition = false;

  @Output() selectedIntern: Intern;

  constructor(private _service: InterServiceService,private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getIntern();
    this.displayColumns = [
      'name',
      'age',
      'dateOfBirth',
      'studies',
      'mentor',
      'delete',
      'update',
    ];
  }

  deleteIntern(id: string) {
    this._service.deleteIntern(id).subscribe((succes) => {
      this.getIntern();
      this._changeDetectorRef.detectChanges();
    });
  }

  getIntern() {
    this._service.getInternsData().subscribe((interns: Intern[]) => {
      this.interns = interns;
    });
  }

  clickConditon(intern:Intern){
    if(this.condition == false){
      this.condition = true;
      this.selectedIntern = intern;
    }
    else{
      this.condition = false;
    }
  }

}
