import { Entretien } from './entretien';
import { Voiture } from './voiture';

export interface EntretienVoiture {
    ID?: number;
    DateOperation: Date;
    PieceRechange: Date;
    MontantPieceRechange: number;
    MainOEuvre: number;
    AgentEntretien: string;
    KilomettrageArret: number;
    KilomettrageLimite: number;
    DateProchainEntretien: Date;
    Remarques: string;
    voitureID: number;
    entretienID : number;
    userID: number;
    voiture?: Voiture;
    entretien?: Entretien;
}
