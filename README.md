# Very Haunted Server Side

## Getting Started

### Local development

Install npm packages

```shell
make dev-install
```

Build the necessary images

```shell
make dev-build
```

Spin up the containers

```shell
make dev-up
```

Go to [http://localhost:3000](http://localhost:3000) in your browser

Technologies:

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Nakama JavaScript Client](https://heroiclabs.com/docs/nakama/client-libraries/javascript/) - JavaScript SDK for
  Nakama [API Docs](https://heroiclabs.github.io/nakama-js/)
- [Docker](https://docs.docker.com/manuals/) - Docker is a software platform that allows you to build, test, and deploy
  applications quickly using containers.