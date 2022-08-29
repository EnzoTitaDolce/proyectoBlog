import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  clickDerecho(){

    document.oncontextmenu=ev=>{
      ev.preventDefault();
      alert("No se permite el click derecho");
    }
  
  }

}

