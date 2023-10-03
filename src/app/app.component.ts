import { Component } from '@angular/core';
import { Comida } from 'src/shared/comida';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de Feira para Halloween';

  private _formControl = new FormControl();
  private _comidas: Array<Comida> = new Array<Comida>();
  private _comida: Comida = new Comida();

  get comida():Comida {
    return this._comida;
  }

  get formControl():FormControl {
    return this._formControl;
  }

  set comida(nova: Comida) {
    this._comida = nova;
  }

  get comidas():Array<Comida> {
    return this._comidas;
  }

  //INSERIR TANTO TRATA O CENÁRIO DE INSERÇÃO QUANTO ALTERAÇÃO
  public inserir():void {
    let idx: number = this.localizar(this._comida.nome);
    if (idx === -1) {
      this._comida.atualizarValorTotal();
      this._comidas.push(this._comida);
      this._comida = new Comida();
    } else {
      this._comida.atualizarValorTotal();
      this._comidas[idx] = this._comida;
      this._comida = new Comida();
    }
  }

  public remover(nome:string) {
    let idx = this._comidas.findIndex((c) => (c.nome === nome));
    if (idx === -1) {
      return -1;
    } else {
      return this._comidas.splice(idx - 1, 1)[0];
    }
  }

  public localizar(nome:string): number {
    let idx = this._comidas.findIndex((c) => (c.nome === nome));
    if (idx === -1) {
      return -1;
    } else {
      return idx;
    }
  }

}
