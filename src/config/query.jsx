import { gql } from '@apollo/client';

export const postsForListingPage = gql`
  query AllPosts($endCursor: String) {
    posts(first: 12, after: $endCursor) {
      nodes {
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
        postInfo {
          tmVideoUrl
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

export const AllPosts = gql`
  query AllPosts {
    posts(first: 100) {
      nodes {
        title
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
        postInfo {
          tmVideoUrl
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

// post by category pass category slug in qury
export const PostsByCategory = gql`
  query PostsByCategory($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      name
      slug
      description
      posts(first: 1000) {
        nodes {
          title
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
          postInfo {
            tmVideoUrl
          }
        }
      }
    }
  }
`;

export const Categories = gql`
  query Categories {
    categories(first: 1000) {
      nodes {
        name
        slug
        count
        categoryInfo {
          catImage {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const programsScheduling = gql`
  query programsScheduling {
    programsScheduling(first: 3) {
      nodes {
        title
        excerpt
        programInfo {
          videoUrl
          programTime
        }
      }
    }
  }
`;

export const AllScholars = gql`
  query AllScholars {
    scholars(first: 50) {
      nodes {
        slug
        title
        databaseId
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const AllPlaylist = gql`
  query AllPlaylist {
    playLists {
      nodes {
        slug
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

// post by category pass category slug in qury
export const PostsByScholar = gql`
  query PostsByScholar($sid: String = "") {
    posts(
      where: {
        metaQuery: {
          metaArray: { key: "actor_id", compare: LIKE, value: $sid }
        }
      }
      first: 100
    ) {
      nodes {
        title
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
