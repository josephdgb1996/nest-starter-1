import { ExecutionContext } from '@nestjs/common';
import { GqlContext } from '@dto';
import { GqlExecutionContext } from '@nestjs/graphql';

export function isGraphQl(executionContext: ExecutionContext) {
  // args http: [request, response]
  // args graphql: [root, args, context, info]
  // args rpc: [data]
  // args websocket: [client, data]
  return (executionContext.getArgs().length === 4);
}

// Só funciona para requisições GraphQl e HTTP. Não chamar para contextos RPC e websocket.
export function getRequest(executionContext: ExecutionContext) {
  if (isGraphQl(executionContext)) {
    return GqlExecutionContext.create(executionContext).getContext<GqlContext>().req;
  } else {
    return executionContext.switchToHttp().getRequest();
  }
}
