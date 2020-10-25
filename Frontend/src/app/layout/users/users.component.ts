import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usermodel';
import { routerTransition } from 'src/app/router.animations';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()]

})
export class UsersComponent implements OnInit {

  constructor(private userservice :UserService) { }
 users :User []= [];
  ngOnInit(): void {
      this.userservice.getalluser().subscribe((res=>{
this.users =res.users;
console.log(this.users)
       }),
       (error) => {
         // afficher toast
         console.error(error);
       });
  }

}
