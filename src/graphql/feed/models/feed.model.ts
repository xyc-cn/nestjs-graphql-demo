import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Feed {
  constructor(feed: Partial<Feed>) {
    Object.assign(this, feed);
  }

  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;
}
