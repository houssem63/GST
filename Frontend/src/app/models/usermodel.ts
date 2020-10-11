export interface User {
    ID?: number;
    Rs?: string;
    Adresse?: string;
    Tel?: number;
    Fax?: number;
    Email?: string;
    Site?: string;
    Matfiscale?: string;
    Image?: string;
    MotDePasse?: string;
    Status?: string;
    DateExpiration?: Date;
    Login?: string;
    Cin?: number;
    Nom?: string;
    Prenom?: string;
    DateDeNaissance?: Date;
    NumCNSS?: number;

    CopierPermis?: string;
    NomPC?: string;
    PrenomPC?: string;
    TelPersonnelContact?: number;
    FaxPersonnelContact?: number;
    AdresseEmailPersonnel?: string;

    Regfiscale?: number;
    function?: string;
    SocieteID?: number;
}
