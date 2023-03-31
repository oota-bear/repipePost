/*
  Warnings:

  - A unique constraint covering the columns `[recipeTitleId]` on the table `Materials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `recipeTitleId` to the `Materials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Materials` ADD COLUMN `recipeTitleId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Materials_recipeTitleId_key` ON `Materials`(`recipeTitleId`);

-- AddForeignKey
ALTER TABLE `Materials` ADD CONSTRAINT `Materials_recipeTitleId_fkey` FOREIGN KEY (`recipeTitleId`) REFERENCES `RecipeTitle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
