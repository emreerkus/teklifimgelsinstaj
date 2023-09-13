/*
  Warnings:

  - You are about to drop the column `result` on the `Ratio` table. All the data in the column will be lost.
  - You are about to drop the column `term` on the `Ratio` table. All the data in the column will be lost.
  - You are about to drop the column `tresult` on the `Ratio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ratio" DROP COLUMN "result",
DROP COLUMN "term",
DROP COLUMN "tresult";
