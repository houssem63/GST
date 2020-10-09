import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HistoriqueEmbauche } from 'src/app/models/historiqueembauche';
import { routerTransition } from 'src/app/router.animations';
import { HistoriqueEmbaucheService } from 'src/app/services/historique-embauche.service';
import { AfficheComponent } from './affiche/affiche.component';

@Component({
  selector: 'app-historique-embauche',
  templateUrl: './historique-embauche.component.html',
  styleUrls: ['./historique-embauche.component.css'],
  animations: [routerTransition()]

})
export class HistoriqueEmbaucheComponent implements OnInit,AfterViewInit {
    displayedColumns: string[] = ['ID', 'DateEmbauche', 'DateSortie', 'Salaire','Actions'
    ];
    HistoriqueEmbauches: HistoriqueEmbauche[] = [];

    private societeID;

    dataSource = new MatTableDataSource<HistoriqueEmbauche>();
    constructor( public dialog: MatDialog,private Historiqueservice:HistoriqueEmbaucheService) { }
    @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.societeID = localStorage.getItem('societeId');
    this.Historiqueservice.getall(this.societeID);
    this.Historiqueservice.getsub().subscribe((res) => {
        this.HistoriqueEmbauches = res;
        this.dataSource.data = this.HistoriqueEmbauches;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
edit(id) {
    console.log(id);
}

public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  supprimer(id) {
}
openDialog(id): void {
   const dialogRef = this.dialog.open(AfficheComponent, {
      width: '450px',
      data: {ID: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
}
}
