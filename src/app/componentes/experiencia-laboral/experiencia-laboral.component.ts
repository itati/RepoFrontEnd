import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  expLabList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
        this.datosPortfolio.obtenerDatos().subscribe(data =>{
        this.expLabList=data.experience;
      })
    }

}
