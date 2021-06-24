import client from '../apollo'
import gql from 'graphql-tag';
import { Feed } from "../types/graphql/types";

type resFeed = {
  data: {
    feed: Feed;
  };
};


export function getFeedById(id: number): Promise<resFeed> {
  return client.query({
    query: gql`
      query feed($id: Float!) {
        feed(id: $id) {
          id
          title
          content
        }
      }`,
    variables: {
      id
    },
  });
}
