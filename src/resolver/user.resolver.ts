import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '@service/user.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Mutation()
  createUser(@Args() args: { username, password }) {
    return this.userService.createUser(args.username, args.password);
  }

  @Mutation()
  login(@Args('username') username: string, @Args('password') password: string) {
    return 'TODO';
  }
}
