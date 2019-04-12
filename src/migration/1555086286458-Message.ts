import { MigrationInterface, QueryRunner } from 'typeorm';

export class Message1555086286458 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TABLE `message` (`id` int NOT NULL AUTO_INCREMENT, `message` varchar(255) NOT NULL, `senderId` int NULL, `recipientId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    await queryRunner.query('ALTER TABLE `message` ADD CONSTRAINT `FK_bc096b4e18b1f9508197cd98066` FOREIGN KEY (`senderId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE `message` ADD CONSTRAINT `FK_445b786f516688cf2b81b8981b6` FOREIGN KEY (`recipientId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE `message` DROP FOREIGN KEY `FK_445b786f516688cf2b81b8981b6`');
    await queryRunner.query('ALTER TABLE `message` DROP FOREIGN KEY `FK_bc096b4e18b1f9508197cd98066`');
    await queryRunner.query('DROP TABLE `message`');
  }

}
