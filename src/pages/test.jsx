import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import apolloClient from '@/config/client'

const POSTS_QUERY = gql`
  query PostsQuery($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
          content
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default function PostsPage() {
  const PAGE_SIZE = 10; // Number of posts to load per page
  const { data, loading, error, fetchMore } = useQuery(POSTS_QUERY, {
    variables: { first: PAGE_SIZE },
    client: apolloClient,
  });

  const handleLoadMore = () => {
    if (data.posts.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.posts.pageInfo.endCursor,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;

          return {
            posts: {
              ...fetchMoreResult.posts,
              edges: [...prevResult.posts.edges, ...fetchMoreResult.posts.edges],
            },
          };
        },
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { edges, pageInfo } = data.posts;

  return (
    <div>
      {edges.map((post) => (
        <div key={post.node.id}>
          <h2>{post.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
        </div>
      ))}
      {pageInfo.hasNextPage && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
}
