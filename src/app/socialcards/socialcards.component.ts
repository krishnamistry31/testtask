import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { EventdialogComponent } from '../eventdialog/eventdialog.component';

export interface DialogData {
 num: string;
}

@Component({
  selector: 'app-socialcards',
  templateUrl: './socialcards.component.html',
  styleUrls: ['./socialcards.component.css']
})
export class SocialcardsComponent implements OnInit {

  eventDialog: MatDialogRef<EventdialogComponent>;

  constructor(private dialogModel: MatDialog) { }

  ngOnInit(): void {
  }

  dialog(i) {
    this.eventDialog = this.dialogModel.open(EventdialogComponent,{
      width: '500px',
      data: {num:i},
    });
  }
}
