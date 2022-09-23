import { Controller, Get } from '@nestjs/common';
import { AireService } from './aire.service';

@Controller('aire')
export class AireController {
    constructor(private aireService : AireService){}

    @Get()
    public getAires() : any {
        return this.aireService.getAires();
    }
}
