import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const ibmPlexSans = localFont({
  src: [
    {
      path: "app/fonts/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "app/fonts/IBMPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "app/fonts/IBMPlexSans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "app/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Pagino",
  description:
    "Votre solution de gestion de bibliothèque universitaire pour les prêts de livres.",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  // @ts-ignore
  return (
    <html lang="fr">
      <SessionProvider session={session}>
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}

          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};
export default RootLayout;
