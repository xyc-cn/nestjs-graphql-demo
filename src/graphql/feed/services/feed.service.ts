import { Inject, Injectable } from '@nestjs/common';
import { Feed } from '../models/feed.model';
import { HttpClientService } from '../../../service/http.service';
import { MyLoggerServiceType } from '../../../service/logger.service';
import { SessionServiceType } from '../../../service/session.service';

@Injectable()
export class FeedService {
  constructor(
    private httpClientService: HttpClientService,
    @Inject('SessionService') private sessionService: SessionServiceType,
    @Inject('MyLoggerService') private logger: MyLoggerServiceType,
  ) {}

  async findOneById(id: string): Promise<Feed> {
    const feed = await this.httpClientService.request({
      url: 'http://127.0.0.1:3003/feed/' + id,
      methods: 'get',
    })
    if (feed?.data?.code === 0 && feed?.data?.data) {
      return feed.data.data as Feed;
    } else {
      throw new Error('call cgi error')
    }
  }
}
