/*
  Warnings:

  - You are about to drop the column `price` on the `Ratio` table. All the data in the column will be lost.
  - Added the required column `term` to the `Ratio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ratio" DROP COLUMN "price",
ADD COLUMN     "term" INTEGER NOT NULL;
