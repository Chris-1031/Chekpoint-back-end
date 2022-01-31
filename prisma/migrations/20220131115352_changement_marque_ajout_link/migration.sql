/*
  Warnings:

  - You are about to drop the column `image` on the `marque` table. All the data in the column will be lost.
  - Made the column `name` on table `marque` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `marque` DROP COLUMN `image`,
    ADD COLUMN `link` VARCHAR(255) NULL,
    MODIFY `name` VARCHAR(45) NOT NULL;
