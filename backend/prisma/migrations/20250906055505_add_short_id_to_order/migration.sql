/*
  Warnings:

  - A unique constraint covering the columns `[shortId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shortId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "shortId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_shortId_key" ON "public"."Order"("shortId");
