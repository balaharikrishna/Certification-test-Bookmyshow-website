import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebapiserviceService } from 'src/app/webapiservice.service';
import { TicketsComponent } from '../tickets/tickets.component';

@Component({
  selector: 'app-billdialogue',
  templateUrl: './billdialogue.component.html',
  styleUrls: ['./billdialogue.component.css']
})
export class BilldialogueComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<BilldialogueComponent> ) { }
 
  //  var seats = localStorage.getItem("seatname");
  ngOnInit(): void {
    
  }

  
  
  close(): void {
    this.dialogRef.close();
  }



}
