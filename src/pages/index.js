import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import Carousel from "../components/Carousel";
import List from "../components/List";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});
const Home = props => {
  const policies = props.data.allMarkdownRemark.edges;
  return (
    <Page title={props.data.site.siteMetadata.title.toUpperCase()}>
      <SEO title="Home">
        <meta content="All our policies in one place." name="description" />
      </SEO>
      <Card
        avatar={
          <Avatar>
            <Gift />
          </Avatar>
        }
        style={{ minHeight: 523 }}
        title="Our Policies"
      >
        <Carousel items={policies} />
      </Card>
      <p />
      <List items={policies} />
    </Page>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/policies/" } }
      sort: { fields: [frontmatter___sortField], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            sortField
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(Home));
