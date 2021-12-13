CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"token" TEXT NOT NULL UNIQUE,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"question" TEXT NOT NULL,
	"user_id" integer NOT NULL,
	"tags" TEXT NOT NULL,
	"submited_at" timestamp with time zone NOT NULL DEFAULT 'now()',
	"points" integer NOT NULL DEFAULT 0,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "questions_answers" (
	"id" serial NOT NULL,
	"question_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"answer" TEXT NOT NULL,
	"answered_at" timestamp with time zone NOT NULL DEFAULT 'now()',
	CONSTRAINT "questions_answers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "questions_answers" ADD CONSTRAINT "questions_answers_fk0" FOREIGN KEY ("question_id") REFERENCES "questions"("id");
ALTER TABLE "questions_answers" ADD CONSTRAINT "questions_answers_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");