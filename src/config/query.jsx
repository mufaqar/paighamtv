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
