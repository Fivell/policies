import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Menu from "./Menu";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  return (
    <>
      <AppBar id="appBar">
        <Toolbar>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={8}
          >
            <Grid item>
              <a
                href={props.data.site.siteMetadata.companyUrl}
                style={{
                  fontWeight: "bold",
                  fontSize: "1.25em",
                  color: "#fff",
                }}
              >
                {props.data.site.siteMetadata.company.toUpperCase()}
              </a>
            </Grid>
            <Grid item>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Grid>
          </Grid>
          <Grid item />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
            companyUrl
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
