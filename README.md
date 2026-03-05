# Node Deployment Test App

Minimal Node.js project for testing deployment on a server or container platform.

## Run locally

```powershell
npm start
```

The app starts on `http://localhost:3000` by default.

## Environment variables

- `PORT`: Port the server listens on. Default: `3000`
- `NODE_ENV`: Optional environment name

## Endpoints

- `GET /` returns a basic JSON response
- `GET /health` returns a health check response

## Deploy with Docker

```powershell
docker build -t node-deployment-test .
docker run -p 8080:8080 node-deployment-test
```
