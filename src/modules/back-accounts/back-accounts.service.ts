import { Injectable } from '@nestjs/common';
import { CreateBackAccountDto } from './dto/create-back-account.dto';
import { UpdateBackAccountDto } from './dto/update-back-account.dto';

@Injectable()
export class BackAccountsService {
  create(createBackAccountDto: CreateBackAccountDto) {
    return 'This action adds a new backAccount';
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
