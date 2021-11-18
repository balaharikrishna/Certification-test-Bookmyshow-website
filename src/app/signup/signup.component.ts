import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public loginservice:LoginserviceService) { }

  ngOnInit(): void {
  }

  loginuser(userloginform:NgForm){
    console.log(userloginform,"logindetails")
    let newuser={
      UserEmail : userloginform.value.email,
      UserPassword: userloginform.value.password
    }
    console.log(newuser,"logindetails")
    this.loginservice.adduserlogin(newuser).subscribe(data => {console.log(data);});
  }

}
