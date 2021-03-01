const path = require(`path`)
const chunk = require(`lodash/chunk`)

exports.createPages = async gatsbyUtilities => {
    // Query our posts from the GraphQL server
    const pages = await getPages(gatsbyUtilities)

    if (!pages.length) {
        return
    }

    await createIndividualPages({ pages, gatsbyUtilities })
}

/**
 * This function creates all the individual pages in this site
 */
const createIndividualPages = async ({ pages, gatsbyUtilities }) =>
    Promise.all(
        pages.map(({ page }) => {
                const pageTemplate =  path.resolve(`./src/templates/shop-category.js`);

                gatsbyUtilities.actions.createPage({
                    path: page.slug,
                    component: pageTemplate,
                    context: {
                        id: page.id,
                    },
                })
            }
        )
    )

async function getPages({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress pages sorted by date
      allWpProductCategory {
        edges {
            page: node {
              name
              id
              uri
              slug
            }
        }
      }
    }
  `)

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your pages`,
            graphqlResult.errors
        )
        return
    }

    return graphqlResult.data.allWpProductCategory.edges
}