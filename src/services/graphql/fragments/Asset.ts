import { gql } from "graphql-request";

export const f_Asset = gql`
  fragment Asset on Asset {
    title
    src
    id
    blurHash
    description
    width
    height
    dominantColor 
  }
`;
