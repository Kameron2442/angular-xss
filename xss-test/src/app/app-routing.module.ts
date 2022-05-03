import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XssComponent } from './components/xss/xss.component';

const routes: Routes = [{path: '', component: XssComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
