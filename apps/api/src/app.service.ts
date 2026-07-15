import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
      database: 'ONLINE',
      redis: 'ONLINE',
      uptime: process.uptime(),
    };
  }
}
