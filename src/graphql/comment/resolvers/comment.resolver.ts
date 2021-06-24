import { NotFoundException, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Comment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService, private readonly logger: Logger) {}

  @Query(() => Comment)
  async comment(
    @Args('id', {
      description: '这是评论的id',
    })
    id: number,
  ): Promise<Comment> {
    const Comment = await this.commentService.findOneById(id);
    if (!Comment) {
      throw new NotFoundException(id);
    }
    return Comment;
  }
}
