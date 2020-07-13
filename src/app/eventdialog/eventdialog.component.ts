import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../socialcards/socialcards.component';
 
@Component({
  selector: 'app-eventdialog',
  templateUrl: './eventdialog.component.html',
  styleUrls: ['./eventdialog.component.css']
})
export class EventdialogComponent implements OnInit {

  msg:string = "EVENT NAME"
  msg2:string = "NONE"
  imagename:string = "assets/images/empty.png"
  displaybarcode:boolean = false;
  constructor(public dialogRef: MatDialogRef<EventdialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      dialogRef.disableClose = true;
  }

  close(): void {
    this.dialogRef.close();
  }

  redeem(): void {
    this.displaybarcode = true;
  }
  ngOnInit(): void {
    if(this.data.num == '1'){
      this.msg="HAPPY HOUR";
      this.msg2="OFFER";
      this.imagename="assets/images/bar.png";
    }
    else if(this.data.num == '2'){
      this.msg="COMEDY NIGHT";
      this.msg2="EVENT";
      this.imagename="assets/images/event.png";
    }
    else{
      this.msg="EVENT NAME";
      this.msg2="NONE";
      this.imagename="assets/images/empty.png";
    }
  }

}
