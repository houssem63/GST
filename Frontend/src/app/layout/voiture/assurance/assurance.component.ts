import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
    selector: 'app-assurance',
    templateUrl: './assurance.component.html',
    styleUrls: ['./assurance.component.css']
})
export class AssuranceComponent implements OnInit {
    voitureID;
    voiture: Voiture;
    constructor(private router: ActivatedRoute, private voitureservice: VoitureService) { }

    ngOnInit(): void {
        this.router.paramMap.subscribe((paramMap: ParamMap) => {
            this.voitureID = paramMap.get('id');
        });
        this.voitureservice.getonevoiture(this.voitureID).subscribe((voiture) => {
            this.voiture = voiture.voiture;
        });

    }
}
