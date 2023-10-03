export class Comida {

    private _quantidade:number;
    private _nome:string;
    private _preco:number;
    private _valorTotal:number = 0;

    constructor(quantidade:number=0, nome:string="", preco:number=0.0) {
        this._quantidade = quantidade;
        this._nome = nome;
        this._preco = preco;
    }

    get quantidade():number {
        return this._quantidade;
    }

    get nome():string {
        return this._nome;
    }

    get preco():number {
        return this._preco;
    }

    get valorTotal():number {
        return this._valorTotal;
    }

    set quantidade(valor:number) {
        this._quantidade = valor;
    }

    set nome(valor:string) {
        this._nome = valor;
    }

    set preco(valor:number) {
        this._preco = valor;
    }

    set valorTotal(valor:number) {
        this._valorTotal = valor;
    }

    public atualizarValorTotal():void {
        this._valorTotal = this._quantidade * this._preco;
    }

    public toString():string {
        return `${this._quantidade}x ${this._nome}s - ${this._preco}R$ - total ${this._valorTotal}R$`
    }

}
