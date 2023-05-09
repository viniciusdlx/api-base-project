/*
  Warnings:

  - You are about to drop the `clienttype` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_clientTypeId_fkey`;

-- DropTable
DROP TABLE `clienttype`;

-- CreateTable
CREATE TABLE `Client_Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_clientTypeId_fkey` FOREIGN KEY (`clientTypeId`) REFERENCES `Client_Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
