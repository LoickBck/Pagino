import React from "react";
import { signOut } from "@/auth";
import { sampleBooks } from "@/constant";
import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Déconnexion</Button>
      </form>

      <BookList title="Livres empruntés" books={sampleBooks} />
    </>
  );
};
export default Page;
