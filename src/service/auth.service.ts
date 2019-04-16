import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@service/user.service';
import { compareSync } from 'bcrypt';
import { JwtPayload } from '@dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async authenticateUser(username: string, password: string): Promise<string> {
    const user = await this.userService.findByUsername(username);

    if (!user) {
      return null;
    } else if (!compareSync(password, user.password)) {
      return null;
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
      username: user.username,
    };

    return this.jwtService.sign(jwtPayload);
  }
}
