/*
  Warnings:

  - Added the required column `price` to the `Ratio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `Ratio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `term` to the `Ratio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ratio" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "result" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "term" INTEGER NOT NULL;
