import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Personnel } from 'src/app/models/personnel';
import { routerTransition } from 'src/app/router.animations';
import { PerosnnelService } from 'src/app/services/perosnnel.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { AffichePersonnelComponent } from './affiche-personnel/affiche-personnel.component';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css'],
  animations: [routerTransition()]
})

export class PersonnelComponent implements OnInit, AfterViewInit {
    panelOpenState = false;
    personnel: Personnel[] = [];
private societeID;

    displayedColumns: string[] = ['ID', 'cin', 'Nom', 'Prenom',
    'Email', 'Actions'];
    dataSource = new MatTableDataSource<Personnel>();
    result = '';
    files: File[] = [];

  constructor(private personnelservice: PerosnnelService , public dialog: MatDialog) { }
@ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {

      this.societeID = localStorage.getItem('societeId');
      this.personnelservice.getallpersonnel(this.societeID);
      this.personnelservice.getpersoonelsub().subscribe((res) => {
          this.personnel = res;
          this.dataSource.data = this.personnel;
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
this.personnelservice.delete(id);
}
openDialog(id): void {
    const dialogRef = this.dialog.open(AffichePersonnelComponent, {
      width: '450px',
      data: {ID: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}
