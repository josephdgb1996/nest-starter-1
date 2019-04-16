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
    if (!username || !plainPassword) {
      return null;
    }

    const computationDifficulty = 10;
    const password = hashSync(plainPassword, computationDifficulty);
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }

  async findById(id: number) {
    if (!id) {
      return null;
    }

    return this.userRepository.findOne({ where: { id} });
  }

  async findByUsername(username: string) {
    if (!username) {
      return null;
    }

    return this.userRepository.findOne({ where: { username} });
  }
}
