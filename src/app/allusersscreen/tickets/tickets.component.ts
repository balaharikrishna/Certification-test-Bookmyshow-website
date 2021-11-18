import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { concat, Observable } from 'rxjs';
import { WebapiserviceService } from 'src/app/webapiservice.service';
import { ConfirmedpopupComponent } from './confirmedpopup/confirmedpopup.component';



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  SeatsList: any[] = [];
  bookedlist: any[] = [];
  price: any[] = [];

  totalPrice: number = 0
  isBooked: boolean = false




  constructor(private seatservieces: WebapiserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshSeats();
    // console.log(localStorage.getItem("seatname"));  

  }

  view = false;

  cart(view: any) {
    this.view = true;
  }

  refreshSeats() {
    this.seatservieces.getSeats().subscribe((data: any) => {

      this.SeatsList = data['Data'];
      console.log(this.SeatsList);

    })
  }

  book() {

    this.bookedlist = this.SeatsList.filter(x => x.isSelected)
    if (this.bookedlist == null || this.bookedlist.length == 0) {
      alert('please select any seats')
      return
    }
    this.totalPrice = 0
    this.bookedlist.forEach(x => {
      this.totalPrice = this.totalPrice + x.price //
    })
    this.isBooked = true
    // let dialogRef = this.dialog.open(BilldialogueComponent, {
    //   height: 'auto',
    //   width: '700px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }

  public confirmed() {

    let dialogRef = this.dialog.open(ConfirmedpopupComponent, {

      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });

  }



}
function price(arg0: string, price: any): any {
  throw new Error('Function not implemented.');
}

