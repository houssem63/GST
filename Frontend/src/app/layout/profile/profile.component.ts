import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Societe } from 'src/app/models/societe';
import { SocieteService } from 'src/app/services/societe-service.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private societeserivce: SocieteService,public dialog: MatDialog) { }
societeId;
societe: Societe;
  ngOnInit(): void {
      this.societeId = localStorage.getItem('societeId');
      this.societeserivce.getOneSociete(this.societeId).subscribe((res) => {
this.societe = res.societe;
      });
  }
  openDialog(id): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '250px',
      data: {ID: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
