import { Banque } from './banque';

export interface Compte {
    ID?: string;
    RIB: string;
    userID: string;
    banqueID: string;
    banquenom?: string;
    banque? : Banque;
}
