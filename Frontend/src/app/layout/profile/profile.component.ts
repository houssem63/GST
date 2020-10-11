import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Societe } from 'src/app/models/societe';
import { User } from 'src/app/models/usermodel';
import { SocieteService } from 'src/app/services/societe-service.service';
import { UserService } from 'src/app/services/user.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice: UserService,public dialog: MatDialog) { }
IDuser;
user: User;
  ngOnInit(): void {
      this.IDuser = localStorage.getItem('societeId');
      this.userservice.getOneuser(this.IDuser).subscribe((res) => {
this.user = res.user;
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
