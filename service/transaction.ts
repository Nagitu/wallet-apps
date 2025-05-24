// database/category.ts
import { getDb } from "../database/db";

export const addCategory = async (
  name: string,
  type: string
): Promise<void> => {
  const db = await getDb();
  await db.withTransactionAsync(async (tx) => {
    await tx.executeSqlAsync(
      "INSERT INTO categories (name, type) VALUES (?, ?)",
      [name, type]
    );
  });
};

export const getCategoriesByType = async (type: string): Promise<any[]> => {
  const db = await getDb();
  let result = await db.withTransactionAsync(async (tx) => {
    const { rows } = await tx.executeSqlAsync(
      "SELECT * FROM categories WHERE type = ?",
      [type]
    );
    return rows._array;
  });

  return result;
};
