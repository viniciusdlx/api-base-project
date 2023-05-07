import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersModel {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  name: string;
}
