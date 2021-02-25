/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `http://www.sec.salsa.marketing/graphql`,
      },
    },
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        // Base URL of Wordpress site
        api: 'sec.salsa.marketing',

        // set to false to not see verbose output during build
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: 'ck_6b3f8a119e7ab4ef10e0792be5d94ab6d1fbf8af',
            consumer_secret: 'cs_9fff31ac516bc5e875fd4eb616a822e5cdb231fb',
              },
              // Array of strings with fields you'd like to create nodes for...
              fields: ['products', 'products/categories', 'products/attributes'],
              // Send the API keys as query string parameters instead of using the authorization header
              // OPTIONAL: defaults to false
              query_string_auth: false,
              // Version of the woocommerce API to use
              // OPTIONAL: defaults to 'wc/v3'
              api_version: 'wc/v3',
              // OPTIONAL: How many results to retrieve *per request*
              per_page: 100,
              // OPTIONAL: Custom WP REST API url prefix, only needed if not using
              // the default prefix ('wp-json').
              // wpAPIPrefix: 'wp-json',
              // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
              // port: '8080',
              // OPTIONAL: Encoding; default to 'utf8'
              encoding: 'utf8',
              // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
              axios_config: {
                // Axios config options
              }
        }
      }
  ],
}
