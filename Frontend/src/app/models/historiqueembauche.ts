import { Poste } from './poste';

export interface HistoriqueEmbauche {
    ID?: string;
    DateEmbauche: Date;
    DateSortie: Date;
    Salaire: number;
    PersonnelID?: string;
    posteID?: string;
    userID?: string;
    PosteNom?: string;
    poste ?: Poste;
}
