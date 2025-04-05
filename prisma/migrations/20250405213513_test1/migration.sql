-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preference_questions" (
    "id" SERIAL NOT NULL,
    "question_text" TEXT NOT NULL,

    CONSTRAINT "preference_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preferences" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "answer" TEXT,

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_events" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3),
    "description" TEXT,
    "location_place" VARCHAR(255),
    "is_recurring" BOOLEAN NOT NULL DEFAULT false,
    "recurrence_pattern" VARCHAR(255),
    "recurrence_start_date" TIMESTAMP(3),
    "recurrence_end_date" TIMESTAMP(3),
    "is_generated" BOOLEAN NOT NULL DEFAULT false,
    "break_time" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_deadlines" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "due_time" TIMESTAMP(3),
    "description" TEXT,
    "priority" VARCHAR(255),
    "projected_duration" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_deadlines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
