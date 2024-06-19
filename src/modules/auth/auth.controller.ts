import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SignInDto) {
    return this.authService.signin(signinDto);
  }

  @Post("signup")
  create(@Body() signUpDto: SignupDto) {
    return this.authService.signup(signUpDto);
  }
}
