import { Module } from '@nestjs/common';
import { FeedResolver } from '../resolvers/feed.resolver';
import { FeedService } from '../services/feed.service';

@Module({
  imports: [],
  providers: [FeedResolver, FeedService],
})
export class FeedModule {}
