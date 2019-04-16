import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from '@model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}


}
