import { Component, OnInit, Input } from '@angular/core';
import { IngressoModel } from './ingresso.model';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss']
})
export class IngressoComponent implements OnInit {

  ingresso: IngressoModel = new IngressoModel();

  @Input() filmes: Array<string> = new Array();

  constructor() { }

  ngOnInit() {

  }

  comprar(event){
    console.log('Evento: ', event);
    console.log('Ingresso: ', this.ingresso);

    alert('Compra realizada com sucesso!');
    alert('Filme selecionado: ' + this.ingresso.filme);
  }

}
