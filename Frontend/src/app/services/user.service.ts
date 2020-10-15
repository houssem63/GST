import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/usermodel";
const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({
    providedIn: "root",
})
export class UserService {
    getoneUsersub = new Subject<User>();
    user: User;
    motdepassesub =new Subject<{msg:string ,ok :boolean}>();
    constructor(private http: HttpClient, private route: Router) {}
    getallsociete() {
        return this.http.get<{ societe: User[] }>(
            BACKEND_URL + "getallsociete"
        );
    }
    inscriptionsociete(
        Rs: string,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        Site: string,
        Matfiscale: string,
        Image: File,
        MotDePasse: string,
        Status: boolean,
        Login: string,
        Userfunction: string
    ) {
        const societedata = new FormData();

        societedata.append("Rs", Rs);
        societedata.append("Adresse", Adresse);
        societedata.append("Tel", Tel.toString());
        societedata.append("Fax", Fax.toString());
        societedata.append("Email", Email);
        societedata.append("Site", Site);
        societedata.append("Matfiscale", Matfiscale);
        societedata.append("Image", Image);
        societedata.append("MotDePasse", MotDePasse);
        societedata.append("Status", String(Status));
        societedata.append("Login", Login);
        societedata.append("Function", Userfunction);

        this.http
            .post<{ msg: string; ok: boolean }>(
                BACKEND_URL + "add",
                societedata
            )
            .subscribe((res) => {
                this.route.navigate(["/login"]);

                console.log(res);
            });
    }
    inscriptionpersonnel(
        Cin: number,
        Nom: string,
        Prenom: string,
        DateDeNaissance: Date,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        NumCNSS: number,
        CopierPermis: File,
        SituationFamilialle: string,
        Login: string,
        MotDePasse: string,
        Image: File,
        SocieteID: number,
        UserFunction
    ) {
        const personneldata = new FormData();
        personneldata.append("Cin", Cin.toString());

        personneldata.append("Nom", Nom);
        personneldata.append("Prenom", Prenom);
        personneldata.append("DateDeNaissance", DateDeNaissance.toString());

        personneldata.append("Adresse", Adresse);
        personneldata.append("Tel", Tel.toString());
        personneldata.append("Fax", Fax.toString());
        personneldata.append("Email", Email);
        personneldata.append("NumCNSS", NumCNSS.toString());
        personneldata.append("CopierPermis", CopierPermis);
        personneldata.append("SituationFamilialle", SituationFamilialle);
        personneldata.append("MotDePasse", MotDePasse);
        personneldata.append("Login", Login);
        personneldata.append("Image", Image);
        personneldata.append("SocieteID", SocieteID.toString());
        personneldata.append("Function", UserFunction);
        console.log(Login);
        this.http
            .post<{ msg: string; ok: boolean }>(
                BACKEND_URL + "add",
                personneldata
            )
            .subscribe((res) => {
                console.log(res);
                this.route.navigate(["/login"]);
            });
    }
    inscriptionclient(
        Rs: string,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        Site: string,
        NomPC: string,
        PrenomPC: string,
        TelPersonnelContact: number,
        FaxPersonnelContact: number,
        AdresseEmailPersonnel: string,
        Matfiscale: string,
        Regfiscale: number,
        Login: string,
        MotDePasse: string,
        Image: File,
        SocieteID: number,
        UserFunction: string
    ) {
        console.log(UserFunction);
        const clientdata = new FormData();

        clientdata.append("Rs", Rs);
        clientdata.append("Adresse", Adresse);
        clientdata.append("Tel", Tel.toString());
        clientdata.append("Fax", Fax.toString());
        clientdata.append("Email", Email);
        clientdata.append("NomPC", NomPC);
        clientdata.append("PrenomPC", PrenomPC);
        clientdata.append(
            "TelPersonnelContact",
            TelPersonnelContact.toString()
        );
        clientdata.append(
            "FaxPersonnelContact",
            FaxPersonnelContact.toString()
        );
        clientdata.append("AdresseEmailPersonnel", AdresseEmailPersonnel);

        clientdata.append("Regfiscale", Regfiscale.toString());

        clientdata.append("Site", Site);

        clientdata.append("Matfiscale", Matfiscale);
        clientdata.append("Image", Image);
        clientdata.append("MotDePasse", MotDePasse);
        clientdata.append("Login", Login);
        clientdata.append("SocieteID", SocieteID.toString());
        clientdata.append("Function", UserFunction);

        this.http
            .post<{ msg: string; ok: boolean }>(BACKEND_URL + "add", clientdata)
            .subscribe((res) => {
                console.log(res);
                this.route.navigate(["/login"]);
            });
    }
    getOneuser(id: string) {
        this.http
            .get<{ user: User }>(BACKEND_URL + `getonebyid/${id}`)
            .subscribe((res) => {
                this.getoneUsersub.next(res.user);
                this.user = res.user;
            });
    }
    getoneusersubscribe() {
        return this.getoneUsersub.asObservable();
    }
    updatesociete(
        Rs,
        Adresse,
        Tel,
        Fax,
        Email,
        Site,
        Matfiscale,
        Image,
        MotDePasse,
        Status,
        Login,
        Function,
        userId
    ) {
        const societe: User = {
            Rs,
            Adresse,
            Tel,
            Fax,
            Email,
            Site,
            Matfiscale,
            Image,
            MotDePasse,
            Status,
            Login,
            Function,
        };
        this.http
            .put(BACKEND_URL + `update/${userId}`, societe)
            .subscribe((res) => {
                console.log(res);
                this.getoneUsersub.next(societe);
            });
    }
    updatepersonnel(
        Cin,
        Nom,
        Prenom,
        DateDeNaissance,

        Adresse,
        Tel,
        Fax,
        Email,
        NumCNSS,
        CopierPermis,

        SituationFamilialle,
        Login,
        Image,
        MotDePasse,
        SocieteID,
        Function,
        userId
    ) {
        const personnel: User = {
            Cin,
            Nom,
            Prenom,
            DateDeNaissance,
            Adresse,
            Tel,
            Fax,
            Email,
            Login,
            Image,
            CopierPermis,
            SituationFamilialle,
            MotDePasse,
            SocieteID,
            Function,
            NumCNSS,
        };
        console.log(personnel);
        this.http
            .put(BACKEND_URL + `update/${userId}`, personnel)
            .subscribe((res) => {
                console.log(res);
                this.getoneUsersub.next(personnel);
            });
    }
    editclient(
        Rs,
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
        Image,
        MotDePasse,
        SocieteID,
        userId
    ) {
        const client: User = {
            Rs,
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
            Image,
            MotDePasse,
            SocieteID,
        };
        this.http
            .put(BACKEND_URL + `update/${userId}`, client)
            .subscribe((res) => {
                console.log(res);
                this.getoneUsersub.next(client);
            });
    }
    changeimage(image: File, id) {
        console.log(image);
        const userdata = new FormData();

        userdata.append("Image", image);
        this.http
            .put<{ imagepath: any }>(
                BACKEND_URL + `updateimage/${id}`,
                userdata
            )
            .subscribe((res) => {
                console.log(res);
                this.user.Image = res.imagepath;
                this.getoneUsersub.next(this.user);
            });
    }
    changemotdepasse(actuelMotDePasse, nouvelleMotDePasse ,id){
const change ={actuelMotDePasse, nouvelleMotDePasse}
this.http.put<{msg:string ,ok :boolean}>(BACKEND_URL +`changemotdpasse/${id}`,change).subscribe((res)=>{
    console.log(res)
    this.motdepassesub.next({msg :res.msg,ok:res.ok})
})
    }
    getmotdepassesub(){
        return this.motdepassesub.asObservable()
    }
}
