import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';
const BACKEND_URL = environment.apiUrl + '/role/';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    subrole = new Subject<Role[]>();
    private roles: Role[] = [];
    Roledata;
    constructor(private http: HttpClient) { }
    getallRole() {
        this.http.get<{ role: Role[] }>(BACKEND_URL + `getall`).subscribe((res) => {

            this.roles = res.role;
            this.subrole.next([...this.roles]);
        });
    }
    getRolesub() {
        return this.subrole.asObservable();
    }
    add(role: Role) {

        this.http.post<{ role: Role }>(BACKEND_URL + 'add', role).subscribe((res) => {

            this.roles.push(res.role);
            this.subrole.next([...this.roles]);
        });
    }
    delete(id) {
        this.http.delete(BACKEND_URL + `delete/${id}`).subscribe((res) => {
            this.roles = this.roles.filter(p => p.ID !== id);
            this.subrole.next([...this.roles]);
        });
    }
    edit(role: Role, id: string) {
        this.http.put(BACKEND_URL + `update/${id}`, role).subscribe((res) => {

            const updateRole = [...this.roles];
            const oldRole = updateRole.findIndex(p => p.ID === id);
            updateRole[oldRole] = role;
            this.roles = updateRole;
            this.subrole.next([...this.roles]);
        });
    }
    getRoledata() {
        return this.Roledata;
    }
}
