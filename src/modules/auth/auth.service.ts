import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private jwtService: JwtService
  ) {}

  async signin(signinDto: SignInDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const acessToken =  await this.generateToken(user.id)
    
    return { acessToken }
  }

  async signup(signUpDto: SignupDto) {
    const emailTaken = await this.usersRepo.findUnique({ where: { email: signUpDto.email } });

    if (emailTaken) {
      throw new ConflictException('Email already taken');
    }

    const hashedPassword = await hash(signUpDto.password, 10);

    const user = await this.usersRepo.create({
      data: {
        ...signUpDto,
        password: hashedPassword,
        categories: {
          createMany: {
            data: [
              // Income
              { name: 'Salário', icon: 'salary', type: 'INCOME' },
              { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
              // Expense
              { name: 'Casa', icon: 'home', type: 'EXPENSE' },
              { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSE' },
              { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
              { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
              { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
              { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
              { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
              { name: 'Outro', icon: 'other', type: 'EXPENSE' },
            ]
          }
        }
      },
    })

    const acessToken =  await this.generateToken(user.id)
    
    return { acessToken }
  }

  private generateToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
