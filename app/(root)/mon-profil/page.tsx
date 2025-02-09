import React from "react";
import BookList from "@/components/BookList";
import BorrowBook from "@/components/BorrowBook";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc } from "drizzle-orm";

const Page = async () => {
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];
  return (
    <>
      <BookList
        title="Livres empruntés"
        books={latestBooks.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};
export default Page;
