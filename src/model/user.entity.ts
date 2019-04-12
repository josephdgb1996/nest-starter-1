import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '@model/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Message, message => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, message => message.recipient)
  receivedMessages: Message[];
}
