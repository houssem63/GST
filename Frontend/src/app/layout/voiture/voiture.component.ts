import {  AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Voiture } from 'src/app/models/voiture';
import { routerTransition } from 'src/app/router.animations';
import { VoitureService } from 'src/app/services/voiture.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
    selector: 'app-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css'],
    animations: [routerTransition(),  [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
          ]),
     ] ],

})
export class VoitureComponent implements OnInit ,AfterViewInit,OnDestroy {
    voitures: Voiture[] = [];
    voituresub;
    societeID;

    popoverTitle = 'Popover title';
   popoverMessage = 'Vous etes sure';
    confirmClicked = false;
       cancelClicked = false;
       dataSource = new MatTableDataSource<Voiture>();
       columnsToDisplay = ['ID', 'Matricule', 'Actions'];
  expandedElement: Voiture | null;
    constructor(private voitureservice: VoitureService) { }
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(): void {
        this.societeID = localStorage.getItem('societeId');
        this.voitureservice.getallvoitureofsociete(this.societeID);
        this.voituresub = this.voitureservice.voituresubscribe().subscribe((voiture) => {
            this.voitures = voiture;
            this.dataSource.data = voiture;
        });
    }
   ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    console.log(this.dataSource.sort )
      }
      public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
      }
      supprimer(id) {
       // this.personnelservice.delete(id);
        }
affiche(e){
    console.log(e)
}

    ngOnDestroy() {
        this.voituresub.unsubscribe();
    }

}



