import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Tout doux le loup! C'est un peu trop rapide là.
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Il semble que vous ayez été un peu trop rapide ! Notre serveur a détecté
        un excès de requêtes. Prenez une courte pause et réessayez dans quelques
        instants.
      </p>
    </main>
  );
};
export default Page;
