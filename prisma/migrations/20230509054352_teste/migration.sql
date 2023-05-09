/*
  Warnings:

  - You are about to drop the column `clientTypeId` on the `client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_clientTypeId_fkey`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `clientTypeId`,
    MODIFY `isActive` BOOLEAN NOT NULL DEFAULT true;
