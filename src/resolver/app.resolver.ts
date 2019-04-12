import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query()
  status() {
    return 'nest-starter is running';
  }

  @Query()
  time() {
    return Date.now();
  }
}
