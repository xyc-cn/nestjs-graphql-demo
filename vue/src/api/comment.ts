import client from '../apollo'
import gql from 'graphql-tag';
import { Comment } from '../types/graphql/types'

type resComment = {
  data: {
    comment: Comment;
  };
};

export function getCommentById(id: number): Promise<resComment> {
  return client.query({
    query: gql`
      query comment($id: Float!) {
        comment(id: $id) {
          id
          content
        }
      }`,
    variables: {
      id
    },
  })
}
