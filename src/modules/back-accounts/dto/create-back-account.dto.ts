import { IsEnum, IsHexColor, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BankAccountType } from "../entities/BankAccount";

export class CreateBackAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @IsString()
  @IsEnum(BankAccountType)
  type: BankAccountType;
}
