import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AllusersscreenComponent } from './allusersscreen/allusersscreen.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { AllusersscreenModule } from './allusersscreen/allusersscreen.module';


export const routes = [
  { path:'', redirectTo:'login-page', pathMatch:'full'},
  { path: 'login-page', component:LoginpageComponent},
  { path: 'signup' ,component:SignupComponent},
  { path: 'admin-screen', component: AdminscreenComponent},
  { path: 'alluser-screen', component:AllusersscreenComponent,
  loadChildren: () => import('./allusersscreen/allusersscreen.module').then(m => m.AllusersscreenModule), },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
