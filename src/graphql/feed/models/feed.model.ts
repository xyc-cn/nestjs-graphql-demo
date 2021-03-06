import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Feed {
  constructor(feed: Partial<Feed>) {
    Object.assign(this, feed);
  }

  @Field(() => Int)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;
}
