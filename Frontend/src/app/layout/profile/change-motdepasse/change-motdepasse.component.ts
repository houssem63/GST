import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-change-motdepasse',
    templateUrl: './change-motdepasse.component.html',
    styleUrls: ['./change-motdepasse.component.css'],
})
export class ChangeMotdepasseComponent implements OnInit {
    @Input() public IDuser: string;
    msg;
    ok;
    hide = true;
    form;
    constructor(private userservice: UserService) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            actuelMotDePasse: new FormControl(null, {
                validators: [Validators.required],
            }),
            nouvelleMotDePasse: new FormControl(null, {
                validators: [Validators.required],
            }),
            retappernouvelleMotDePasse: new FormControl(null, {
                validators: [Validators.required],
            }),
        });
    }

    valid(e) {
        if (this.form.value.nouvelleMotDePasse !== e.target.value) {
            this.form
                .get('retappernouvelleMotDePasse')
                .setErrors({ invalid: true });
        }
    }
    change() {
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        this.userservice.changemotdepasse(
            this.form.value.actuelMotDePasse,
            this.form.value.nouvelleMotDePasse,
            this.IDuser
        );
        this.userservice.getmotdepassesub().subscribe((res) => {
            this.msg = res.msg;
            this.ok = res.ok;
            if (res.ok === true) {
                this.form.reset();
            }
            setTimeout(() => {
                this.msg = null;
            }, 500);
        });
    }
}
