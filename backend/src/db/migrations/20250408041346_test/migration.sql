/*
  Warnings:

  - The primary key for the `preference_questions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_deadlines` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_preferences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "preference_questions" DROP CONSTRAINT "preference_questions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "preference_questions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "preference_questions_id_seq";

-- AlterTable
ALTER TABLE "user_deadlines" DROP CONSTRAINT "user_deadlines_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_deadlines_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_deadlines_id_seq";

-- AlterTable
ALTER TABLE "user_events" DROP CONSTRAINT "user_events_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_events_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_events_id_seq";

-- AlterTable
ALTER TABLE "user_preferences" DROP CONSTRAINT "user_preferences_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_preferences_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";
