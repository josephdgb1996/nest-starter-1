import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { UserService } from '@service';

@Injectable()
export class UserByIdPipe implements PipeTransform<number> {
  constructor(
    private readonly userService: UserService,
  ) {}

  async transform(userId: number) {
    console.log('UserByIdPipe');
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new NotFoundException(`User not found: ${userId}`);
    }
  }
}
