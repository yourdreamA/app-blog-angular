import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';


const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent, children : [
    {path : 'users', component : UsersComponent},
    {path : '**', redirectTo : 'users'}
  ]

  },

  {path:'register', component:RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
