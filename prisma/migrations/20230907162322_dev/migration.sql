/*
  Warnings:

  - You are about to drop the column `userId` on the `Webmark` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Webmark" DROP CONSTRAINT "Webmark_userId_fkey";

-- DropIndex
DROP INDEX "Webmark_userId_idx";

-- AlterTable
ALTER TABLE "Webmark" DROP COLUMN "userId";
