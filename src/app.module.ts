import { AuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { BackAccountsModule } from './modules/back-accounts/back-accounts.module';
@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, CategoriesModule, BackAccountsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
