-- AlterTable
ALTER TABLE `address` ADD COLUMN `complement` VARCHAR(191) NULL DEFAULT 'null',
    MODIFY `street_name` VARCHAR(191) NULL,
    MODIFY `street_number` INTEGER NULL;
