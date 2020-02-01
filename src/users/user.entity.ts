import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Address } from 'src/addresses/address.entity';
import { userInfo } from 'os';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  addressId: number;

  @OneToOne(
    type => Address,
    address => address.user,
    { cascade: true }
  )
  @JoinColumn()
  address: Address;
}
