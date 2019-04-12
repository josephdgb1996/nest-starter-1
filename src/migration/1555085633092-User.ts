import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1555085633092 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE `user`');
  }

}
