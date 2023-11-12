import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // this.client.emit('demo:luis', 'Hola mundo');
    // this.client.emit('demo:danny', 'Hola mundo');

    this.appService.events();
    return 'hey';
  }
}
