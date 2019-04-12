import { DynamicModule } from '@nestjs/common';
import { Env } from '@config/env';
import { GraphQLModule } from '@nestjs/graphql';

export function GraphQlConfig(): DynamicModule {
  const isDev: boolean = Env.env() === 'development'; // Only Dev

  return GraphQLModule.forRoot({
    // Determina o valor inicial de GqlExecutionContext.create(executionContextHost).getContext()
    context: ({ req, res }) => ({ req, res }),

    typePaths: ['./src/graphql/*.graphqls'],
    playground: isDev,
    path: `/${Env.apiPrefix()}/graphql`,

    // Exibir stack trace nos erros retornados
    debug: isDev,

    // Permite a inspeção do schema GraphQL por ferramentas como Insomnia
    introspection: true,
  });
}
