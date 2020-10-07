import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Personnel } from 'src/app/models/personnel';
import { routerTransition } from 'src/app/router.animations';
import { PerosnnelService } from 'src/app/services/perosnnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css'],
  animations: [routerTransition()]
})

export class PersonnelComponent implements OnInit,AfterViewInit {
    panelOpenState = false;
    personnel : Personnel[] =[]
private societeID;

    displayedColumns: string[] = ['ID','cin','Nom', 'Prenom','Date_de_naissance',
    'Adresse','Tel','Fax','Email','NumCNSS','SituationFamilialle','edit','Supprimer'];
    dataSource = new MatTableDataSource<Personnel>();

  constructor(private personnelservice :PerosnnelService) { }
@ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {

      this.societeID=localStorage.getItem('societeId')
      this.personnelservice.getallpersonnel(this.societeID).subscribe((res) => {
          console.log(res)
          this.personnel=res.personnel;
          this.dataSource.data = this.personnel;
      })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
edit(id){
    console.log(id)
}

public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  supprimer(id){
    console.log(id)
}
}
