import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BackAccountsService } from './back-accounts.service';
import { CreateBackAccountDto } from './dto/create-back-account.dto';
import { UpdateBackAccountDto } from './dto/update-back-account.dto';

@Controller('back-accounts')
export class BackAccountsController {
  constructor(private readonly backAccountsService: BackAccountsService) {}

  @Post()
  create(@Body() createBackAccountDto: CreateBackAccountDto) {
    return this.backAccountsService.create(createBackAccountDto);
  }

  @Get()
  findAll() {
    return this.backAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backAccountsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBackAccountDto: UpdateBackAccountDto) {
    return this.backAccountsService.update(+id, updateBackAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backAccountsService.remove(+id);
  }
}
