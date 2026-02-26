import { z } from 'zod';
import { insertMatchSchema, matches } from './schema';
export const api = {
  matches: {
    list: {
      method: 'GET' as const,
      path: '/api/matches' as const,
      responses: { 200: z.array(z.custom<typeof matches.$inferSelect>()) },
    },
    create: {
      method: 'POST' as const,
      path: '/api/matches' as const,
      input: insertMatchSchema,
      responses: { 201: z.custom<typeof matches.$inferSelect>(), 400: z.any() },
    },
    leaderboard: {
      method: 'GET' as const,
      path: '/api/leaderboard' as const,
      responses: { 200: z.array(z.any()) },
    }
  },
};
