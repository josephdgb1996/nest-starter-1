import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class SendMessageDto {
  @IsInt()
  @Min(1)
  recipientId: number;

  @IsNotEmpty()
  @IsString()
  message: string;
}
