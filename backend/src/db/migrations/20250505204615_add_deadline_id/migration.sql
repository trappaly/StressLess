-- AlterTable
ALTER TABLE "user_deadlines" ALTER COLUMN "event_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user_events" ADD COLUMN     "deadline_id" TEXT;
