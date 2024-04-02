# Very Haunted Server Side

## Getting Started

### Local development

1. Install npm packages

```shell
make dev-install
```

2. Build the necessary images

```shell
make dev-build
```

3. Spin up the containers

```shell
make dev-up
```

4. Go to [http://localhost:3000](http://localhost:3000) in your browser

Technologies:

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Nakama JavaScript Client](https://heroiclabs.com/docs/nakama/client-libraries/javascript/) - JavaScript SDK for
  Nakama [API Docs](https://heroiclabs.github.io/nakama-js/)
- [Docker](https://docs.docker.com/manuals/) - Docker is a software platform that allows you to build, test, and deploy
  applications quickly using containers.