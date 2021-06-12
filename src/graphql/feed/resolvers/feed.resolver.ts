import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Feed } from '../models/feed.model';
import { FeedService } from '../services/feed.service';

@Resolver(() => Feed)
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @Query(() => Feed)
  async feed(
    @Args('id', {
      description: '这是素材的id',
    })
    id: string,
  ): Promise<Feed> {
    const feed = await this.feedService.findOneById(id);
    if (!feed) {
      throw new NotFoundException(id);
    }
    return feed;
  }
}
