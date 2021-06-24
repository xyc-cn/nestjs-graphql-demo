import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  constructor(comment: Partial<Comment>) {
    Object.assign(this, comment);
  }

  @Field(() => Int)
  id: string;

  @Field()
  content: string;
}
