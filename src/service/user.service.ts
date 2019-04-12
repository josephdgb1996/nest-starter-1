import { Injectable } from '@nestjs/common';
import { User } from '@model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(username: string, plainPassword: string) {
    try {
      const computationDifficulty = 10;
      const password = hashSync(plainPassword, computationDifficulty);
      const user = this.userRepository.create({ username, password });
      return await this.userRepository.save(user);
    } catch (ormError) {
      return null;
    }
  }
}
