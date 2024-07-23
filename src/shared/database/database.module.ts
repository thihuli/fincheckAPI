import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { CategoryRepository } from './repositories/categories.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoryRepository],
  exports: [UsersRepository, CategoryRepository]
})
export class DatabaseModule {}
