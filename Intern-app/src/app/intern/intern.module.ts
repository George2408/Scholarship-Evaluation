import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { AddInternComponent } from './add-intern/add-intern.component';
import { UpdateInternComponent } from './update-intern/update-intern.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [ListViewComponent, AddInternComponent, UpdateInternComponent],
  imports: [CommonModule, AppRoutingModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatDatepickerModule, MatNativeDateModule],

  exports: [ListViewComponent, AddInternComponent, UpdateInternComponent],
})
export class InternModule {}
