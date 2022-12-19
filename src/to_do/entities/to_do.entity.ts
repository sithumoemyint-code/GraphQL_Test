// import { ObjectType, Field, Int } from '@nestjs/graphql';
// import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

// @Entity()
// @ObjectType()
// export class ToDo {
//   @PrimaryGeneratedColumn()
//   @Field((type) => Int)
//   id: number;

//   @Column()
//   @Field()
//   title: string;

//   @Column({ type:  'text', nullable: true })
//   @Field({ nullable: true })
//   content?: string;
// }

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
@Entity('To_doEntity')
export class To_doEntity {
  @Field()
  @PrimaryGeneratedColumn()
  ID: number;

  @Field()
  @Column()
  To_Do_Name: string;

  @Field()
  @Column()
  To_Do_Date: Date;

  @Field()
  @Column('time')
  To_Do_Time: Date;

  @Field()
  @Column()
  Remark: string;
}

@InputType()
export class To_doInput {
  @Field({ nullable: false })
  To_Do_Name: string;

  @Field()
  To_Do_Date: string;

  @Field()
  To_Do_Time: string;

  @Field({ nullable: false })
  Remark: string;
}
