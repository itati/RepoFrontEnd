import { Component } from '@angular/core';
import { PortfolioService } from './servicios/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INICIALAPP';
  headershow: any;
  isLogin:boolean=false;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    };
  }
