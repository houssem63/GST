import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/models/role';
import { routerTransition } from 'src/app/router.animations';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  animations: [routerTransition()]

})
export class RoleComponent implements OnInit {

    displayedColumns: string[] = ['ID', 'Libelle','Actions'];
    dataSource = new MatTableDataSource<Role>();
    roles: Role[] = [];
    popoverTitle = 'Popover title';
popoverMessage = 'Vous etes sure';
confirmClicked = false;
cancelClicked = false;
form;
form1;
PosteeditID;
private societeID;
  constructor(private roleservice :RoleService ,config: NgbDropdownConfig) {    config.placement = 'left';
}
@ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }
ngOnInit(): void {
    this.societeID = localStorage.getItem('societeId');
    this.roleservice.getallRole();
      this.roleservice.getRolesub().subscribe((res) => {
          this.roles = res;
          this.dataSource = new MatTableDataSource(this.roles);

      });
      this.form = new FormGroup({
        Libelle: new FormControl(null, [
            Validators.required,
        ])})
        this.form1 = new FormGroup({
            Libelle1: new FormControl(null, [
                Validators.required,
            ])})
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  supprimer(id) {
   this.roleservice.delete(id);
    }
    edit(id) {
        console.log(id);
    }
    enregiste(){
        console.log(this.form.value)
        const role :Role={
            Libelle :this.form.get('Libelle').value,
        }
        this.roleservice.add(role)
        this.form.reset()
    }
    patch(id){
        this.PosteeditID=id
        const role =this.roles.find(p=>p.ID ==id)
        this.form1.setValue({
            Libelle1 :role?.Libelle
        })
    }
    edite(){
       const role:Role={
            ID:this.PosteeditID,
            Libelle : this.form1.get('Libelle1').value,

        }
        this.roleservice.edit(role,this.PosteeditID)
    }
}
