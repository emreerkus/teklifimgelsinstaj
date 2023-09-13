/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maxp" DOUBLE PRECISION NOT NULL,
    "minp" DOUBLE PRECISION NOT NULL,
    "maxr" DOUBLE PRECISION NOT NULL,
    "minr" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratio" (
    "id" SERIAL NOT NULL,
    "ratio" DOUBLE PRECISION NOT NULL,
    "bankid" INTEGER NOT NULL,

    CONSTRAINT "Ratio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ratio" ADD CONSTRAINT "Ratio_bankid_fkey" FOREIGN KEY ("bankid") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
