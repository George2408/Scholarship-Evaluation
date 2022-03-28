import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AddInternComponent } from './intern/add-intern/add-intern.component';
import { ListViewComponent } from './intern/list-view/list-view.component';
import { UpdateInternComponent } from './intern/update-intern/update-intern.component';

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch:"full" },
  { path: "addIntern", component:AddInternComponent },
  { path: "viewIntern", component:ListViewComponent },
  { path: "uppdateIntern", component:UpdateInternComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
