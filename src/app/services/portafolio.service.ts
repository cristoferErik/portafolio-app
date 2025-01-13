import { Injectable } from '@angular/core';
import { Portafolio, Progetto, Skill, SocialNetwork, Status } from '../components/models/portafolio';
import { aboutMe, edus, lgs, pgs, sks, sns } from './json';

@Injectable({
  providedIn: 'root'
})

export class PortafolioService {
  private portafolio:Portafolio;

  constructor() {
    this.portafolio=new Portafolio();
   }
   getPortafolio():Portafolio{

    this.portafolio.nome="Cristofer Calvo";
    this.portafolio.image='/images/cris.jpg';
    this.portafolio.about=aboutMe;
    this.portafolio.educazione=edus;
    this.portafolio.email="cristofererikmilla@gmail.com";
    this.portafolio.skills=sks;
    this.portafolio.progietti=pgs;
    this.portafolio.socialNetworks=sns;
    this.portafolio.status=Status.DISPONIBILE;
    this.portafolio.cv=`/pdf/CristoferCalvoCV.pdf`;
    this.portafolio.linguaggi=lgs;

    return this.portafolio;
   }
}
