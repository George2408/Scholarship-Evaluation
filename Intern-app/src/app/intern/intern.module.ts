import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { AddInternComponent } from './add-intern/add-intern.component';

@NgModule({
  declarations: [ListViewComponent, AddInternComponent],
  imports: [CommonModule],

  exports: [ListViewComponent, AddInternComponent],
})
export class InternModule {}
