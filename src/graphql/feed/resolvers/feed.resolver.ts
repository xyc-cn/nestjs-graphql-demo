import { NotFoundException, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Feed } from '../models/feed.model';
import { FeedService } from '../services/feed.service';

@Resolver(() => Feed)
export class FeedResolver {
  constructor(private readonly feedService: FeedService, private readonly logger: Logger) {}

  @Query(() => Feed)
  async feed(
    @Args('id', {
      description: '这是素材的id',
    })
    id: string,
  ): Promise<Feed> {
    const feed = await this.feedService.findOneById(id);

    this.logger.log('id: ' +id + ' is call')
    this.logger.error('id: ' +id + ' is call')
    this.logger.warn('id: ' +id + ' is call')
    if (!feed) {
      throw new NotFoundException(id);
    }
    return feed;
  }
}
