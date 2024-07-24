import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { type Prisma } from "@prisma/client";

@Injectable()
export class BankAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }
}