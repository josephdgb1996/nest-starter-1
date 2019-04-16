import { PassportStrategies } from '@enum/passport-strategies.enum';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { getRequest } from '@util/execution-context.util';

export class BearerJwtGuard extends AuthGuard(PassportStrategies.BEARER_JWT_DEFAULT) {
  getRequest(executionContext: ExecutionContext) {
    return getRequest(executionContext);
  }

  canActivate(executionContext: ExecutionContext) {
    console.log('can activate');
    return super.canActivate(executionContext);
  }

  handleRequest(err, payload, info) {
    console.log('handle request');
    if (err || !payload) {
      throw err || new UnauthorizedException();
    }

    return payload;
  }
}
