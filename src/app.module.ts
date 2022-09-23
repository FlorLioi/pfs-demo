import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AireController } from './aire/aire.controller';
import { AireService } from './aire/aire.service';
import { TecnicoController } from './tecnico/tecnico.controller';
import { TecnicoService } from './tecnico/tecnico.service';

@Module({
  imports: [
    ServeStaticModule.forRoot( { rootPath : join(__dirname,'..','client')} )
  ],
  controllers: [AppController, AireController, TecnicoController],
  providers: [AppService, AireService, TecnicoService],
})
export class AppModule {}
