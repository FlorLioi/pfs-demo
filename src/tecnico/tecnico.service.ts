import { Injectable } from '@nestjs/common';

@Injectable()
export class TecnicoService {
    private listaTecnicos = [];

    public getTecnicos(): any{
        this.listaTecnicos = [
            {"nombre": "Mariano Gomez", "celular": 11111111},
            {"nombre": "Juan Perez", "celular": 22222222},
            {"nombre": "Gonzalo Ruiz", "celular": 33333333}

        ];

        return this.listaTecnicos;

    }
}
