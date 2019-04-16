import * as controller from '@controller';
import * as guard from '@guard';
import * as resolver from '@resolver';
import * as service from '@service';

import { Module } from '@nestjs/common';
import { GraphQlConfig } from '@config/graphql';
import { DatabaseConfig, ModelsConfig } from '@config/database';
import { JwtConfig, PassportConfig } from '@config/auth';

const guards = Object.values(guard);
const controllers = Object.values(controller);
const resolvers = Object.values(resolver);
const services = Object.values(service);

@Module({
  imports: [
    DatabaseConfig(),
    GraphQlConfig(),
    JwtConfig(),
    ModelsConfig(),
    PassportConfig(),
  ],
  controllers,
  providers: [
    ...guards,
    ...resolvers,
    ...services,
  ],
})
export class AppModule {}
