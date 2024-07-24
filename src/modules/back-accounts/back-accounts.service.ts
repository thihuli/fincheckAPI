import { Injectable } from '@nestjs/common';
import { CreateBackAccountDto } from './dto/create-back-account.dto';
import { UpdateBackAccountDto } from './dto/update-back-account.dto';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-account.repositories';

@Injectable()
export class BackAccountsService {
  constructor(private readonly banlAccountRepository: BankAccountRepository) {}

  create(userId: string,createBackAccountDto: CreateBackAccountDto) {
    const { color, initialBalance, name, type } = createBackAccountDto;
    return this.banlAccountRepository.create({
      data: {
        type,
        name,
        color,
        userId,
        initialBalance
      }
    });
  }

  findAll() {
    return `This action returns all backAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backAccount`;
  }

  update(id: number, updateBackAccountDto: UpdateBackAccountDto) {
    return `This action updates a #${id} backAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} backAccount`;
  }
}
