/*
  Warnings:

  - Added the required column `tresult` to the `Ratio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ratio" ADD COLUMN     "tresult" DOUBLE PRECISION NOT NULL;
