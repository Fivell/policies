import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
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
        action={
          <Button
            className={props.classes.root}
            color="secondary"
            component={Link}
            to="/policies"
            variant="contained"
          >
            View All Policies
          </Button>
        }
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
