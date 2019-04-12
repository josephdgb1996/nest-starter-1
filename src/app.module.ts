import * as controller from '@controller';
import * as resolver from '@resolver';
import * as service from '@service';

import { Module } from '@nestjs/common';
import { GraphQlConfig } from '@config/graphql';
import { DatabaseModule } from '@config/database';

const controllers = Object.values(controller);
const resolvers = Object.values(resolver);
const services = Object.values(service);

@Module({
  imports: [
    DatabaseModule(),
    GraphQlConfig(),
  ],
  controllers,
  providers: [
    ...resolvers,
    ...services,
  ],
})
export class AppModule {}
