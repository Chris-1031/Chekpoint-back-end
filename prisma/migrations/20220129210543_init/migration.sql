-- CreateTable
CREATE TABLE `marques` (
    `idmarques` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `image` BLOB NULL,

    PRIMARY KEY (`idmarques`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `model` (
    `idmodel` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `date` DATETIME(0) NULL,
    `moteur` VARCHAR(45) NULL,
    `chevaux` VARCHAR(45) NULL,
    `histoire` VARCHAR(255) NULL,

    PRIMARY KEY (`idmodel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `model` ADD CONSTRAINT `idmarques` FOREIGN KEY (`idmodel`) REFERENCES `marques`(`idmarques`) ON DELETE NO ACTION ON UPDATE NO ACTION;
