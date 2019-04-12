import { DynamicModule } from '@nestjs/common';
import { Env } from '@config/env';

export function JwtConfig(): DynamicModule {
  return JwtModule.register({
    secretOrPrivateKey: Env.jwtSecret(),
    signOptions: {
      expiresIn: Env.jwtExpire(),
    },
  });
}