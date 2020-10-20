import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/usermodel';
import { routerTransition } from 'src/app/router.animations';
import { ClientService } from 'src/app/services/client.service';
import { AfficheClientComponent } from './affiche-client/affiche-client.component';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
    animations: [routerTransition()]

})
export class ClientComponent implements OnInit, AfterViewInit {
    popoverTitle = 'Popover title';
popoverMessage = 'Vous etes sure';
confirmClicked = false;
cancelClicked = false;
    displayedColumns: string[] = ['ID', 'RS', 'Nom', 'Prenom',
        'Email', 'Actions'];
     clients: User[] = [];

    dataSource = new MatTableDataSource<User>();
    societeID;
    constructor(private clientservice: ClientService,public dialog: MatDialog) { }
    @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
        this.dataSource.sort = sort;
      }
    ngOnInit(): void {
        this.societeID = localStorage.getItem('societeId');
        this.clientservice.getallclient(this.societeID);
        this.clientservice.getallclientsub().subscribe(res => {
            this.clients = res;
            console.log(res)
            this.dataSource.data = this.clients;
        });
    }
    ngAfterViewInit(): void {
    }
    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    supprimer(id) {
      //  this.personnelservice.delete(id);
        }
        openDialog(id): void {
            const dialogRef = this.dialog.open(AfficheClientComponent, {
              width: '850px',
              data: {ID: id}
            });

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');

            });}
}
