import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-affiche-voiture',
  templateUrl: './affiche-voiture.component.html',
  styleUrls: ['./affiche-voiture.component.css']
})
export class AfficheVoitureComponent implements OnInit {
voiture :Voiture;
    constructor(private voitureservice :VoitureService,
        public dialogRef: MatDialogRef<AfficheVoitureComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

      onNoClick(): void {
        this.dialogRef.close();
      }
  ngOnInit(): void {
      console.log(this.data.VoitureID)
      this.voitureservice.getonevoiture(this.data.VoitureID).subscribe((voiture)=>{
this.voiture =voiture.voiture;
      })
  }

}
