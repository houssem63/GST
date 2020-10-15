import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
panelOpenState = false;
imageprofile;
user: User;
imageprofilecontrole;
  ngOnInit(): void {
      this.IDuser = localStorage.getItem('societeId');

      this.userservice.getOneuser(this.IDuser)
      this.userservice.getoneusersubscribe().subscribe((res) => {
this.user = res;
this.imageprofile = res.Image;
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
  changeimage(e){
    const file = (e.target as HTMLInputElement).files[0];
    this.imageprofilecontrole=file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageprofile = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log( this.imageprofilecontrole)
    this.userservice.changeimage(this.imageprofilecontrole,this.IDuser)
  }
}
