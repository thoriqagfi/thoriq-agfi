CREATE TABLE "public"."Users" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE "public"."Blogs" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  views INTEGER NOT NULL DEFAULT 0,
  minutes_read INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  "authorId" INTEGER NOT NULL,
  FOREIGN KEY ("authorId") REFERENCES "public"."Users"(id)
);

CREATE TABLE "public"."TechStacks" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "public"."Projects" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  views INTEGER NOT NULL DEFAULT 0,
  images VARCHAR(255) NOT NULL,
  total_team INTEGER NOT NULL DEFAULT 1,
  url_site VARCHAR(255),
  "userId" INTEGER NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "public"."Users"(id)
);

CREATE TABLE "public"."ProjectTechStacks" (
  "projectId" INTEGER NOT NULL,
  "techStackId" INTEGER NOT NULL,
  PRIMARY KEY ("projectId", "techStackId"),
  FOREIGN KEY ("projectId") REFERENCES "public"."Projects"(id),
  FOREIGN KEY ("techStackId") REFERENCES "public"."TechStacks"(id)
);
