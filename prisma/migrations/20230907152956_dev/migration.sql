/*
  Warnings:

  - Added the required column `userId` to the `Webmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Webmark" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Webmark_userId_idx" ON "Webmark"("userId");

-- AddForeignKey
ALTER TABLE "Webmark" ADD CONSTRAINT "Webmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
