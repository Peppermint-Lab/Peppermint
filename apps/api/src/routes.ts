import { FastifyInstance } from "fastify";
import { authRoutes } from "./controllers/auth";
import { dataRoutes } from "./controllers/data";
import { emailQueueRoutes } from "./controllers/queue";
import { ticketRoutes } from "./controllers/ticket";
import { todoRoutes } from "./controllers/todos";

export function registerRoutes(fastify: FastifyInstance) {
  authRoutes(fastify);
  emailQueueRoutes(fastify);
  todoRoutes(fastify);
  dataRoutes(fastify);
  ticketRoutes(fastify);
}