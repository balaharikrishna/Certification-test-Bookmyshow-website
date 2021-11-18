import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public loginservice:LoginserviceService) { }

  ngOnInit(): void {
     
  }

  loginuser(userloginform:NgForm){
    // console.log(userloginform.value.email);
    // let newuser={
    //   name : userloginform.value.name,
    //   password : userloginform.value.password
    // }

    // this.loginservice.adduserlogin(newuser).subscribe(data => {console.log(data);});
  }

  loginadmin(adminloginform:NgForm){
    console.log(adminloginform.value.email);
    // if{
    //    adminloginform.value.email==this.loginservice.adminlogin && adminloginform.value.password==this.loginservice.adminlogin 
    // }
    // else{

    // }
  }


 
    

}
