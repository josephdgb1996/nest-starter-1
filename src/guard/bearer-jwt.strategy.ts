import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Env } from '@config/env';
import { PassportStrategies } from '@enum/passport-strategies.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BearerJwtStrategy extends PassportStrategy(JwtStrategy, PassportStrategies.BEARER_JWT_DEFAULT) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Env.jwtSecret(),
    });
  }

  // Valor de retorno é passado para o 2o argumento do handleRequest do guard
  async validate(payload: any) {
    return payload;
  }
}
