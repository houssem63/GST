import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/usermodel';
const BACKEND_URL = environment.apiUrl + '/Client/';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private clients: User[] = [];
    private clientssub = new Subject<User[]>();
    private inscriptionresponce = new Subject<{ msg: string, ok: boolean }>();

    constructor(private http: HttpClient,private route: Router) { }
    getallclient(id) {
        this.http.get<{ clients: User[] }>(BACKEND_URL + `getall/${id}`).subscribe((client) => {
            this.clients = client.clients;
            this.clientssub.next([...this.clients]);
        });
    }
    getallclientsub() {
        return this.clientssub.asObservable();
    }

    inscriptionclient(Rs,
        Adresse,
        Tel,
        Fax,
        Email,
        Site,
        NomPC,
        PrenomPC,
        TelPersonnelContact,
        FaxPersonnelContact,
        AdresseEmailPersonnel,
        Matfiscale,
        Regfiscale,
        Login,
        MotDePasse,
        Image,
        societeID,
        Function,
    ) {
        const clientdata = new FormData();

        clientdata.append('Rs', Rs);
        clientdata.append('Adresse', Adresse);
        clientdata.append('Tel', Tel.toString());
        clientdata.append('Fax', Fax.toString());
        clientdata.append('Email', Email);
        clientdata.append('NomPC', NomPC);
        clientdata.append('PrenomPC', PrenomPC);
        clientdata.append(
            'TelPersonnelContact',
            TelPersonnelContact.toString()
        );
        clientdata.append(
            'FaxPersonnelContact',
            FaxPersonnelContact.toString()
        );
        clientdata.append('AdresseEmailPersonnel', AdresseEmailPersonnel);

        clientdata.append('Regfiscale', Regfiscale.toString());

        clientdata.append('Site', Site);

        clientdata.append('Matfiscale', Matfiscale);
        clientdata.append('Image', Image);
        clientdata.append('MotDePasse', MotDePasse);
        clientdata.append('Login', Login);
        clientdata.append('SocieteID', societeID.toString());
        clientdata.append('Function', Function);
        this.http.post<{ client: User, msg: string, ok: boolean }>(BACKEND_URL + 'add', clientdata).subscribe((res) => {
            console.log(res);
            if (res.ok === true) {
                this.clients.push(res.client);
            this.clientssub.next([...this.clients]);
            this.route.navigate(['/client']);
            }
            this.inscriptionresponce.next({ msg: res.msg, ok: res.ok });
        });
    }
    getinscriptionresponce() {
        return this.inscriptionresponce.asObservable();
    }
    getoneclient(id){
      return  this.http.get<{client: User}>(BACKEND_URL + `getonebyid/${id}`);
    }
    edit(Rs,
        Adresse,
        Tel,
        Fax,
        Email,
        Site,
        NomPC,
        PrenomPC,
        TelPersonnelContact,
        FaxPersonnelContact,
        AdresseEmailPersonnel,
        Matfiscale,
        Regfiscale,
        Login,
        MotDePasse,
        Image,
        societeID,
        Function,
        id
    ) {
        const clientdata = new FormData();

        clientdata.append('Rs', Rs);
        clientdata.append('Adresse', Adresse);
        clientdata.append('Tel', Tel.toString());
        clientdata.append('Fax', Fax.toString());
        clientdata.append('Email', Email);
        clientdata.append('NomPC', NomPC);
        clientdata.append('PrenomPC', PrenomPC);
        clientdata.append(
            'TelPersonnelContact',
            TelPersonnelContact.toString()
        );
        clientdata.append(
            'FaxPersonnelContact',
            FaxPersonnelContact.toString()
        );
        clientdata.append('AdresseEmailPersonnel', AdresseEmailPersonnel);

        clientdata.append('Regfiscale', Regfiscale.toString());

        clientdata.append('Site', Site);

        clientdata.append('Matfiscale', Matfiscale);
        clientdata.append('Image', Image);
        clientdata.append('MotDePasse', MotDePasse);
        clientdata.append('Login', Login);
        clientdata.append('SocieteID', societeID.toString());
        clientdata.append('Function', Function)
this.http.put<{client :User}>(BACKEND_URL + `update/${id}`,clientdata).subscribe(res=>{
    const updateclient = [...this.clients];
    const oldclient = updateclient.findIndex(p => p.ID === id);
    updateclient[oldclient] = res.client;
    this.clients = updateclient;
    this.clientssub.next([...this.clients]);
    this.route.navigate(['/client']);

})
        }
}
