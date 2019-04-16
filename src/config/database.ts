import * as model from '@model';
import * as migration from '@migration';

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { DynamicModule } from '@nestjs/common';
import { Env } from '@config/env';

const entities = Object.values(model);
const migrations = Object.values(migration);

export function DatabaseOptions(): TypeOrmModuleOptions & Partial<MysqlConnectionOptions> {
  return {
    type: 'mysql',
    host: Env.mysqlHost(),
    port: Env.mysqlPort(),
    username: Env.mysqlUser(),
    password: Env.mysqlPassword(),
    database: Env.mysqlDatabase(),

    synchronize: false,
    logging: true,

    entities,
    migrations,
    migrationsRun: true,
    cli: {
      // Pasta onde serão geradas as migrações (yarn typeorm)
      migrationsDir: 'src/migration',
    },
  };
}

export function DatabaseConfig(): DynamicModule {
  return TypeOrmModule.forRoot(DatabaseOptions());
}

export function ModelsConfig(): DynamicModule {
  return TypeOrmModule.forFeature(entities);
}
