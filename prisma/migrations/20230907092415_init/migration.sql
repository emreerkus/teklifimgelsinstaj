/*
  Warnings:

  - You are about to drop the column `term` on the `Ratio` table. All the data in the column will be lost.
  - Added the required column `price` to the `Ratio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ratio" DROP COLUMN "term",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
