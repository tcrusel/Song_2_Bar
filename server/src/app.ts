import express from "express";

const app = express();

// Configure it

/* ************************************************************************* */

// CORS Handling: Allow client to connect to server

import cors from "cors";

// In development, allow localhost:3000 (default Vite dev server)
const allowedOrigins = process.env.CLIENT_URL
  ? [process.env.CLIENT_URL]
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

/* ************************************************************************* */

// Request Parsing: Enable JSON parsing for API requests with UTF-8 encoding

app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));

// Set default charset for responses
app.use((req, res, next) => {
  res.charset = "utf-8";
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

/* ************************************************************************* */

// Import the API router
import router from "./router";

app.use(router);

/* ************************************************************************* */

// Production-ready setup

import fs from "node:fs";
import path from "node:path";

const publicFolderPath = path.join(__dirname, "../../server/public");

if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

const clientBuildPath = path.join(__dirname, "../../client/dist");

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

/* ************************************************************************* */

// Middleware for Error Logging

import type { ErrorRequestHandler } from "express";

const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);

  next(err);
};

app.use(logErrors);

export default app;
