import { Component } from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';
import { Portafolio } from '../models/portafolio';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private portafolioService:PortafolioService;
  portafolio!:Portafolio;
  constructor(portafolioService:PortafolioService){
    this.portafolioService=portafolioService;
  }
  ngOnInit():void{
    this.portafolio = this.portafolioService.getPortafolio();
  }

}
