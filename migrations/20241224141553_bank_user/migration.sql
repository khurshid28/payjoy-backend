-- AlterTable
ALTER TABLE `accountant` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER') NOT NULL DEFAULT 'ACCOUNTANT';

-- AlterTable
ALTER TABLE `callcenter` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER') NOT NULL DEFAULT 'CALLCENTER';

-- AlterTable
ALTER TABLE `super` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER') NOT NULL DEFAULT 'SUPER';

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `BankUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NULL,
    `login` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER') NOT NULL DEFAULT 'BANKUSER',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `bank_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BankUser` ADD CONSTRAINT `BankUser_bank_id_fkey` FOREIGN KEY (`bank_id`) REFERENCES `Bank`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
