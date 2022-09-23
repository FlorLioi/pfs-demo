import { Injectable } from '@nestjs/common';

@Injectable()
export class AireService {
    private listaAires = [];

    public getAires() : any{
        this.listaAires = [
            {"identificador":1, "nombre": "Philco", "precio": 150000},
            {"identificador":1, "nombre": "Alaska", "precio": 129000},
            {"identificador":1, "nombre": "Bgh", "precio": 140000},
            {"identificador":1, "nombre": "Lg", "precio": 200000}
        ];
        
        return this.listaAires;
    }
}
