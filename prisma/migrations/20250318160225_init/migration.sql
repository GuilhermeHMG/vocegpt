-- CreateTable
CREATE TABLE `UserInfo` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `bio` TEXT NOT NULL,
    `skills` TEXT NOT NULL,
    `github` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `year_of_birth` VARCHAR(191) NOT NULL,
    `personal` TEXT NOT NULL,
    `professional` TEXT NOT NULL,
    `justification` TEXT NOT NULL,
    `questions` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` TEXT NOT NULL,
    `sender` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
