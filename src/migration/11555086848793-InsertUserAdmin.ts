import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '@model';
import { hashSync } from 'bcrypt';

export class InsertUserAdmin11555086848793 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const userRepo = queryRunner.connection.getRepository(User);
    const computationDifficulty = 10;

    try {
      await userRepo.save(userRepo.create({
        username: 'admin',
        password: hashSync('admin', computationDifficulty),
      }));
    } catch (_) {
      // admin já existe
      return;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const userRepo = queryRunner.connection.getRepository(User);
    await userRepo.delete({ username: 'admin' });
  }

}
