/*
  Warnings:

  - You are about to drop the column `maxr` on the `Bank` table. All the data in the column will be lost.
  - You are about to drop the column `minr` on the `Bank` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bank" DROP COLUMN "maxr",
DROP COLUMN "minr";
