-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "genre" TEXT NOT NULL,
    "age_group" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_id_key" ON "movie"("id");
