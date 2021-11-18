import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AllusersscreenComponent } from './allusersscreen/allusersscreen.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [  
    AppComponent,
    LoginpageComponent,
    AdminscreenComponent,
    AllusersscreenComponent,
    PagenotfoundComponent,
    SignupComponent,
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,

    

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
