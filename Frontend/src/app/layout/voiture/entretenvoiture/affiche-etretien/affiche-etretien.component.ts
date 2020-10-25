import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntretienVoiture } from 'src/app/models/entretienvoiture';
import { EntretienVoitureService } from 'src/app/services/entretien-voiture.service';

@Component({
  selector: 'app-affiche-etretien',
  templateUrl: './affiche-etretien.component.html',
  styleUrls: ['./affiche-etretien.component.css']
})
export class AfficheEtretienComponent implements OnInit {
    entretienvoiture: EntretienVoiture;
        constructor(private entretienvoitureservice: EntretienVoitureService,
        public dialogRef: MatDialogRef<AfficheEtretienComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    console.log(this.data)
      this.entretienvoitureservice.getoneentretienvoiture(this.data.ID).subscribe((res)=>{
          console.log(res)
this.entretienvoiture = res.entretienvoiture;
console.log(this.entretienvoiture)
});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
