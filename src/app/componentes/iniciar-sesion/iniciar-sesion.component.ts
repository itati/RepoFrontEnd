import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  //
  constructor(private formBuilder:FormBuilder, private AutenticacionService:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }

  get Password ()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.AutenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }
}
