import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { SendMessageDto } from '@dto';
import { UserByIdPipe } from '@pipe';

@Resolver('Message')
export class MessageResolver {
  @Mutation()
  @UsePipes(new ValidationPipe({ transform: true }))
  sendMessage(
    @Args() sendMessageDto: SendMessageDto,
    @Args('recipientId', UserByIdPipe) recipient,
  ) {
    console.log('sendMessage', sendMessageDto, recipient);
  }
}
