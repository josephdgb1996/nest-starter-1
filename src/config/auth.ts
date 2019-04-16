import { DynamicModule } from '@nestjs/common';
import { Env } from '@config/env';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PassportStrategies } from '@enum/passport-strategies.enum';

export function JwtConfig(): DynamicModule {
  return JwtModule.register({
    secretOrPrivateKey: Env.jwtSecret(),
    signOptions: {
      expiresIn: Env.jwtExpire(),
    },
  });
}

export function PassportConfig(): DynamicModule {
  return PassportModule.register({ defaultStrategy: PassportStrategies.BEARER_JWT_DEFAULT });
}