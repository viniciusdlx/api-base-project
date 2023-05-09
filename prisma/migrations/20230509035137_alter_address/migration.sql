-- AlterTable
ALTER TABLE `address` MODIFY `country` VARCHAR(191) NOT NULL DEFAULT 'null',
    MODIFY `state` VARCHAR(191) NOT NULL DEFAULT 'null',
    MODIFY `city` VARCHAR(191) NOT NULL DEFAULT 'null';
