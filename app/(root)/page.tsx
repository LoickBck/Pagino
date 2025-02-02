import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constant";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />;
    <BookList
      title="Derniers Livres"
      books={sampleBooks}
      containerClassName="mt-28"
    />
    ;
  </>
);

export default Home;
