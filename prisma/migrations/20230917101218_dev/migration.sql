-- DropForeignKey
ALTER TABLE "Webmark" DROP CONSTRAINT "Webmark_webcollectionId_fkey";

-- AddForeignKey
ALTER TABLE "Webmark" ADD CONSTRAINT "Webmark_webcollectionId_fkey" FOREIGN KEY ("webcollectionId") REFERENCES "Webcollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
