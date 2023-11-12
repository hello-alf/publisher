import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('PROPERTY_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('demo:luis', 'Hola mundo');
    this.client.emit('demo:danny', 'Hola mundo');
    return this.appService.getHello();
  }
}
