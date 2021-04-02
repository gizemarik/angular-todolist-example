import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {  FormUnitComponent} from './form-unit/form-unit.component'

//prepared to show support of lazy loading
const routes: Routes = [
  {
    path: "",
    component: FormUnitComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}