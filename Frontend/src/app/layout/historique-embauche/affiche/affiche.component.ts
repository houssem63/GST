import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoriqueEmbauche } from 'src/app/models/historiqueembauche';
import { HistoriqueEmbaucheService } from 'src/app/services/historique-embauche.service';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {

    Historiqueembauche: HistoriqueEmbauche;
    constructor(  public dialogRef: MatDialogRef<AfficheComponent>,
      @Inject(MAT_DIALOG_DATA) public ID: any,private Historiqueservice:HistoriqueEmbaucheService) { }

    ngOnInit(): void {
        console.log(this.ID)
        const personnelID = this.ID.ID
        this.Historiqueservice.getonehistorique(personnelID).subscribe((res)=>{
            console.log(res)
            this.Historiqueembauche=res.Historique;
        })
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}
