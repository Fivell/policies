module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    companyUrl: "https://versionista.com",
    company: "Versionista",
    title: "Versionista Policies",
    contact: {
      email: "account@versionista.com",
    },
    menuLinks: [
      {
        name: "Policies",
        link: "/policies",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};
