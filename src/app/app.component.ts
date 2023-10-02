import { Component } from '@angular/core';
import { Comida } from 'src/models/comida';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-lista-feira';

  private _comidas: Array<Comida> = new Array<Comida>();
  private _comida: Comida = new Comida();

  get comida():Comida {
    return this._comida;
  }

  set comida(nova: Comida) {
    this._comida = nova;
  }

  get comidas():Array<Comida> {
    return this._comidas;
  }

  public inserir():void {
    if (this.localizar(this._comida.nome) !== -1) {
      this._comidas.push(this._comida);
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

  public localizar(nome:string) {
    let idx = this._comidas.findIndex((c) => (c.nome === nome));
    if (idx === -1) {
      return -1;
    } else {
      return this._comidas[idx];
    }
  }

}
