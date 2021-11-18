import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmedpopup',
  templateUrl: './confirmedpopup.component.html',
  styleUrls: ['./confirmedpopup.component.css']
})
export class ConfirmedpopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmedpopupComponent> ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
