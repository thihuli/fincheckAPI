-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" UUID NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "bank_account_type" NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "initial_balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);
