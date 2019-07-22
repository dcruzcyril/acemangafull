import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { BindingComponent } from './binding/binding.component';
import { LogComponent } from './log/log.component';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'body',component:BodyComponent},
  {path:'binding',component:BindingComponent},
  {path:'log',component:LogComponent},
  {path:'view',component:ViewComponent},
  {path:'detail',component:DetailComponent},
  {path:'',redirectTo:'body', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
