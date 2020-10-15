import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Poste } from 'src/app/models/poste';
import { routerTransition } from 'src/app/router.animations';
import { PosteService } from 'src/app/services/poste.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css'],
  animations: [routerTransition()]

})
export class PosteComponent implements OnInit,AfterViewInit {
    displayedColumns: string[] = ['ID', 'Libelle','Actions'];
    dataSource = new MatTableDataSource<Poste>();
    poste: Poste[] = [];
form;
form1;
PosteeditID;
private societeID;
  constructor(private posteService :PosteService ,config: NgbDropdownConfig) {    config.placement = 'left';
}
@ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.societeID = localStorage.getItem('societeId');
    this.posteService.getallposte(this.societeID);
      this.posteService.getpostesub().subscribe((res) => {
          this.poste = res;
          this.dataSource.data = this.poste;
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
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  supprimer(id) {
   this.posteService.delete(id);
    }
    edit(id) {
        console.log(id);
    }
    enregiste(){
        console.log(this.form.value)
        const poste :Poste={
            Libelle :this.form.get('Libelle').value,
            userID:this.societeID
        }
        this.posteService.add(poste)
        this.form.reset()
    }
    patch(id){
        this.PosteeditID=id
        const poste =this.poste.find(p=>p.ID ==id)
        this.form1.setValue({
            Libelle1 :poste?.Libelle
        })
    }
    edite(){
       const poste:Poste={
            ID:this.PosteeditID,
            Libelle : this.form1.get('Libelle1').value,
            userID:this.societeID
        }
        this.posteService.edit(poste,this.PosteeditID)
    }
}
