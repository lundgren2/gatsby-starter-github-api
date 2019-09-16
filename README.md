<p align="center">
  <a href="https://gatsby-starter-github-api.netlify.com">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/lundgren2/gatsby-starter-github-api/master/src/images/github-gatsby.png" width="400" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Github API
</h1>

This is an example sourcing data from [GitHub GraphQL API v4](https://developer.github.com/v4/) using [gatsby-source-github-api](https://www.gatsbyjs.org/packages/gatsby-source-github-api)

## How to use

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-portfolio https://github.com/gatsbyjs/gatsby-starter-default
    cd my-portfolio/
    ```

2.  **Generate GitHub API Token**
Follow these instructions: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/

3.  **Add your generated token to the `env` file**

```sh
mv .env.example .env
```
```sh
# .env
GITHUB_API_TOKEN=your-token-here
```

4.  **Change the config for your preferences**
The config file is located at `config/site.js`

5.  **Open the source code and start editing!**

Open the `my-portfolio` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

```sh
gatsby develop
```
Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._


## Modify GitHub Query

Heads up! GitHub's GraphQL Explorer makes use of your real, live, production data.

[GitHub GraphQL API](https://developer.github.com/v4/explorer/?variables=%20%7B%0A%20%20%20%22number_of_repos%22%3A%203%0A%7D&query=query%28%24number_of_repos%3AInt%21%29%20%7B%0A%20%20viewer%20%7B%0A%20%20%20%20name%0A%20%20%20%20%20repositories%28last%3A%20%24number_of_repos%29%20%7B%0A%20%20%20%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20%20%20%7D%0A%7D%0A)


## Demo

https://gatsby-starter-github-api.netlify.com/


## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lundgren2/gatsby-starter-github-api)


## Credits

- [gatsby-source-github-api](https://www.gatsbyjs.org/packages/gatsby-source-github-api)

- [github-buttons](https://github.com/ntkme/github-buttons)
