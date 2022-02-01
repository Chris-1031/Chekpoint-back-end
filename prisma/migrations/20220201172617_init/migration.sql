-- CreateTable
CREATE TABLE `marques` (
    `idmarques` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `link` VARCHAR(45) NULL,

    PRIMARY KEY (`idmarques`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `models` (
    `idModels` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `date` DATETIME(0) NULL,
    `moteur` VARCHAR(45) NULL,
    `chevaux` VARCHAR(45) NULL,
    `link` VARCHAR(45) NULL,
    `idmarques` INTEGER NULL,

    INDEX `idMarques_idx`(`idModels`),
    INDEX `idMarques_idx1`(`idmarques`),
    PRIMARY KEY (`idModels`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `models` ADD CONSTRAINT `idMarques` FOREIGN KEY (`idmarques`) REFERENCES `marques`(`idmarques`) ON DELETE NO ACTION ON UPDATE NO ACTION;
