import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personnel } from 'src/app/models/personnel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';

@Component({
  selector: 'app-affiche-personnel',
  templateUrl: './affiche-personnel.component.html',
  styleUrls: ['./affiche-personnel.component.css']
})
export class AffichePersonnelComponent implements OnInit {
personnel: Personnel;
  constructor(  public dialogRef: MatDialogRef<AffichePersonnelComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: any,private personnelservice:PerosnnelService) { }

  ngOnInit(): void {
      console.log(this.ID)
      const personnelID = this.ID.ID
      this.personnelservice.getonepersonnel(personnelID).subscribe((res)=>{
          console.log(res)
          this.personnel=res.personnel;
      })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
