import { Resolver, Mutation, Args, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { UserService } from '@service/user.service';
import { AuthService } from '@service/auth.service';
import { UseGuards } from '@nestjs/common';
import { BearerJwtGuard } from '@guard';
import { User } from '@model';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation()
  createUser(@Args() args: { username, password }) {
    return this.userService.createUser(args.username, args.password);
  }

  @Mutation()
  login(@Args('username') username: string, @Args('password') password: string) {
    return this.authService.authenticateUser(username, password);
  }

  @UseGuards(BearerJwtGuard)
  @Query()
  user(@Args('id') id: number) {
    return this.userService.findById(id);
  }

  @ResolveProperty()
  sentMessages(@Parent() user: User) {
    console.log('sent');
    return [];
  }

  @ResolveProperty()
  receivedMessages(@Parent() user: User) {
    console.log('received');
    return [];
  }
}
