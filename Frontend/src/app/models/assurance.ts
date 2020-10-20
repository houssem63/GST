import { PrestataireAssurance } from './prestataire';

export interface Assurance {
    ID?:string ;
    DateOperation: Date;
    DateDebutValidite: Date;
    DateFinValidite: Date;
    CopierAssurance: string;
    Montant: number;
    prestataireassuranceID :string;
    voitureID:string;
    userID:string;
    prestataireassurance?:PrestataireAssurance;
}
