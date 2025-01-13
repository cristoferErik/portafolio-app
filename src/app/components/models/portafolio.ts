export class Portafolio{
    nome!:string;
    image!:string;
    about!:string;
    educazione!:Educazione[];
    email!:string;
    skills!:Skill[];
    progietti!:Progetto[];
    socialNetworks!:SocialNetwork[];
    status!:Status;
    cv!:string;
    linguaggi!:Linguaggio[];
}

export enum Status {
    DISPONIBILE = "DISPONIBILE PER LAVORARE",
    NON_DISPONIBILE = "NON_DISPONIBILE PER LAVORARE"
}

export class Progetto{
    id!:number;
    nome!:string;
    descrizione!:string;
    image!:string;
}
export class Skill{
    id!:number;
    nome!:string;
    image!:string;
}

export class Linguaggio{
    id!:number;
    nome!:string;
    image!:string;
}
export class SocialNetwork{
    id!:number;
    image!:string;
    url!:string;
}
export class Educazione{
    id!:number;
    image!:string;
    paese!:string;
    descrizione!:string;
}