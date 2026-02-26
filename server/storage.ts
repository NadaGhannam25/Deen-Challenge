import { matches, type Match, type InsertMatch } from "@shared/schema";
import { db } from "./db";
export class DatabaseStorage {
  async getMatches() { return await db.select().from(matches); }
  async createMatch(match: InsertMatch) { 
    const [inserted] = await db.insert(matches).values(match).returning();
    return inserted;
  }
  async getLeaderboard() {
    // منطق حساب المتصدرين بناءً على النتائج المخزنة
  }
}
export const storage = new DatabaseStorage();
