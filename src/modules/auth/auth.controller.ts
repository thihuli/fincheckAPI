import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup';

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
