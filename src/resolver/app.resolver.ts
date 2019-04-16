import { Resolver, Query } from '@nestjs/graphql';

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
