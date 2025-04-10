-- AlterTable
ALTER TABLE `accountant` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER', 'BOTUSER') NOT NULL DEFAULT 'ACCOUNTANT';

-- AlterTable
ALTER TABLE `bankuser` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER', 'BOTUSER') NOT NULL DEFAULT 'BANKUSER';

-- AlterTable
ALTER TABLE `callcenter` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER', 'BOTUSER') NOT NULL DEFAULT 'CALLCENTER';

-- AlterTable
ALTER TABLE `super` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER', 'BOTUSER') NOT NULL DEFAULT 'SUPER';

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER', 'BOTUSER') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `BotUser` (
    `username` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `chat_id` INTEGER NOT NULL,
    `role` ENUM('USER', 'AGENT', 'ADMIN', 'SUPER', 'CLIENT', 'ACCOUNTANT', 'CALLCENTER', 'BANKUSER', 'BOTUSER') NOT NULL DEFAULT 'BOTUSER',
    `work_status` ENUM('WORKING', 'BLOCKED', 'DELETED') NOT NULL DEFAULT 'WORKING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
