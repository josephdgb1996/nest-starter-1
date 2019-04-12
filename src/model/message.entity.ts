import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '@model/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => User, user => user.sentMessages)
  sender: User;

  @ManyToOne(() => User, user => user.receivedMessages)
  recipient: User;
}
