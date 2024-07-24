import { Module } from '@nestjs/common';
import { BackAccountsService } from './back-accounts.service';
import { BackAccountsController } from './back-accounts.controller';

@Module({
  controllers: [BackAccountsController],
  providers: [BackAccountsService],
})
export class BackAccountsModule {}
