import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  cardMedia: {
    height: "200px",
  },
};

const Detail = ({ classes, data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Page>
      <SEO title={title} />
      <Card>
        <CardContent>
          <Typography component="h2" gutterBottom variant="h2">
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
        </CardContent>
      </Card>
    </Page>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;

export default withRoot(withStyles(styles)(Detail));
