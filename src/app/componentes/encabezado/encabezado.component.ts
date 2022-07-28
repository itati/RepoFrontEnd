import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  @Input() miPortfolio: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getPortafolioByID(5).subscribe(data => {
      debugger;
      console.log("componente encabezado: " + data);
      this.miPortfolio=data;
    });

  }

}
