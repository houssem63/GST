import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Assurance } from 'src/app/models/assurance';
import { AssuranceService } from 'src/app/services/assurance.service';

@Component({
  selector: 'app-affiche-assurance',
  templateUrl: './affiche-assurance.component.html',
  styleUrls: ['./affiche-assurance.component.css']
})
export class AfficheAssuranceComponent implements OnInit {
assurance :Assurance;
    constructor(private assuranceservice :AssuranceService,
        public dialogRef: MatDialogRef<AfficheAssuranceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

      onNoClick(): void {
        this.dialogRef.close();
      }

  ngOnInit(): void {
      console.log(this.data)
      this.assuranceservice.getoneassurance(this.data.ID).subscribe((res)=>{
         this.assurance=res.assurance;
      })
  }

}
