import { gql } from '@apollo/client';
import apolloClient from '@/config/client'
import { useRouter } from 'next/router';


const PAGE_SIZE = 10;

async function fetchPaginatedData(pageCursor) {
  

  const query = gql`
    query Posts($first: Int, $after: String, $before: String) {
      posts(first: $first, after: $after, before: $before, where: { status: PUBLISH }) {
        edges {
          node {
            id
            title
            # other fields you need
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const variables = { first: PAGE_SIZE };

  if (pageCursor) {
    variables.after = pageCursor;
    variables.before = pageCursor;
  }

  const { data } = await apolloClient.query({
    query,
    variables,
  });

  return data?.posts;
}

function BlogPage({ posts, pageInfo }) {
  const router = useRouter();

  const handleNextPage = () => {
    const { endCursor } = pageInfo;
    router.push(`/test?after=${endCursor}`);
  };

  const handlePreviousPage = () => {
    const { startCursor } = pageInfo;
    router.push(`/test?before=${startCursor}`);
  };

  return (
    <div className=''>
      {posts.map((post) => (
        <p key={post.node.id}>{post.node.title}</p>
        // Render other post details here
      ))}

      <div>
        {pageInfo.hasPreviousPage && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}

        {pageInfo.hasNextPage && <button onClick={handleNextPage}>Next</button>}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const pageCursor = query.after || query.before || null;
  const data = await fetchPaginatedData(pageCursor);

  return {
    props: {
      posts: data?.edges || [],
      pageInfo: data?.pageInfo || {},
    },
  };
}

export default BlogPage;
