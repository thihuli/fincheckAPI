import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { CategoryRepository } from './repositories/categories.repositories';
import { BankAccountRepository } from './repositories/bank-account.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoryRepository, BankAccountRepository],
  exports: [UsersRepository, CategoryRepository, BankAccountRepository]
})
export class DatabaseModule {}
