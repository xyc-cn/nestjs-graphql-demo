import { Inject, Injectable, Logger } from '@nestjs/common';
import { Comment } from '../models/Comment.model';
import { HttpClientService } from '../../../service/http.service';
import { SessionServiceType } from '../../../service/session.service';

@Injectable()
export class CommentService {
  constructor(
    private httpClientService: HttpClientService,
    @Inject('SessionService') private sessionService: SessionServiceType,
    private logger: Logger,
  ) {}

  async findOneById(id: number): Promise<Comment> {
    const comment = await this.httpClientService.request({
      url: 'http://127.0.0.1:3003/comment/' + id,
      methods: 'get',
    })
    if (comment?.data?.code === 0 && comment?.data?.data) {
      return comment.data.data as Comment;
    } else {
      throw new Error('call cgi error')
    }
  }
}
