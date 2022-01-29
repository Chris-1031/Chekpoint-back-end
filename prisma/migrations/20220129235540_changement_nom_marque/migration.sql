/*
  Warnings:

  - You are about to drop the `marques` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `model` DROP FOREIGN KEY `idmarques`;

-- DropTable
DROP TABLE `marques`;

-- CreateTable
CREATE TABLE `marque` (
    `idmarques` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `image` BLOB NULL,

    PRIMARY KEY (`idmarques`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `model` ADD CONSTRAINT `idmarques` FOREIGN KEY (`idmodel`) REFERENCES `marque`(`idmarques`) ON DELETE NO ACTION ON UPDATE NO ACTION;
