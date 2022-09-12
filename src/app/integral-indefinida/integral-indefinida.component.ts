import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-integral-indefinida',
  templateUrl: './integral-indefinida.component.html',
  styleUrls: ['./integral-indefinida.component.css']
})
export class IntegralIndefinidaComponent implements OnInit {

  constructor(private vps:ViewportScroller) { }

  navegar(id:string) {
    this.vps.scrollToAnchor(id);
  }

  ngOnInit(): void {
  }

}
