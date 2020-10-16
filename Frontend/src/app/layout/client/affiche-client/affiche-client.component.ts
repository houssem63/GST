import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/usermodel';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-affiche-client',
  templateUrl: './affiche-client.component.html',
  styleUrls: ['./affiche-client.component.css']
})
export class AfficheClientComponent implements OnInit {
client:User;
  constructor(public dialogRef: MatDialogRef<AfficheClientComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: any , private clientservice :ClientService) { }

  ngOnInit(): void {
      const clientID =this.ID.ID;
      this.clientservice.getoneclient(clientID).subscribe((res)=>{
this.client =res.client;
      })
  }
  onNoClick(): void {
    this.dialogRef.close();
}
}
