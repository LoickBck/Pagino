import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookCover from "@/components/BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            De <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Catégorie:{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="étoiles" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Nombre de livres: <span>{total_copies}</span>
          </p>
          <p>
            Livres disponibles: <span>{available_copies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn">
          <Image src="/icons/book.svg" alt="livre" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">Emprunter</p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            cover={cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={color}
              cover={cover}
              className="z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookOverview;
