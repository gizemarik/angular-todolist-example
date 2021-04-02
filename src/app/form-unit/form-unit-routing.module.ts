import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  FormUnitComponent} from './form-unit.component'


const routes: Routes = [
    { path: "", component: FormUnitComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class FormUnitRoutingModule { }