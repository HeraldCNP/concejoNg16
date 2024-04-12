import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-carpeta',
  templateUrl: './ver-carpeta.component.html',
  styleUrls: ['./ver-carpeta.component.scss']
})
export class VerCarpetaComponent implements OnInit {
  inputData:any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<VerCarpetaComponent>) {

  }
  ngOnInit(): void {
    this.inputData = this.data;
    console.log(this.inputData);

  }
}
