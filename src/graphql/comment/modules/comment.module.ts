import { Module } from '@nestjs/common';
import { CommentResolver } from '../resolvers/comment.resolver';
import { CommentService } from '../services/comment.service';

@Module({
  imports: [],
  providers: [CommentResolver, CommentService],
})
export class CommentModule {}
