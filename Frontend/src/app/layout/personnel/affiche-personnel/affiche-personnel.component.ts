import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personnel } from 'src/app/models/personnel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';
import { User } from 'src/app/models/usermodel';
import { HistoriqueEmbaucheService } from 'src/app/services/historique-embauche.service';
import { HistoriqueEmbauche } from 'src/app/models/historiqueembauche';
import { PosteService } from 'src/app/services/poste.service';

@Component({
    selector: 'app-affiche-personnel',
    templateUrl: './affiche-personnel.component.html',
    styleUrls: ['./affiche-personnel.component.css']
})
export class AffichePersonnelComponent implements OnInit {
    personnel: User;
    historique: HistoriqueEmbauche[] = [];
    constructor(public dialogRef: MatDialogRef<AffichePersonnelComponent>,
        @Inject(MAT_DIALOG_DATA) public ID: any, private personnelservice: PerosnnelService,
        private embaucheservice: HistoriqueEmbaucheService, private posteservice: PosteService) { }

    ngOnInit(): void {
        console.log(this.ID)
        const personnelID = this.ID.ID
        const societeID = localStorage.getItem('societeId')
        this.personnelservice.getonepersonnel(personnelID).subscribe((res) => {
            console.log(res)
            this.personnel = res.personnel;
        })
        this.embaucheservice.gethistoriquedeonepersonnel(personnelID).subscribe((res) => {
            this.posteservice.getallposte(societeID)
            this.posteservice.getpostesub().subscribe(responce => {
                const postes = responce;
                res.historique.map(h => {
                    postes.map(p => {
                        if (p.ID === h.posteID) {
                            h.PosteNom = p.Libelle;
                            this.historique.push(h)
                        }
                    })
                })
            })
        })
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
