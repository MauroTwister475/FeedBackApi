/*
  Warnings:

  - Added the required column `comment` to the `FeedBack` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FeedBack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT NOT NULL
);
INSERT INTO "new_FeedBack" ("id", "screenshot", "type") SELECT "id", "screenshot", "type" FROM "FeedBack";
DROP TABLE "FeedBack";
ALTER TABLE "new_FeedBack" RENAME TO "FeedBack";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
