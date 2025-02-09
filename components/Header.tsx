"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { logoutAction } from "@/lib/actions/logout";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/bibliotheque"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/bibliotheque"
                ? "text-light-200"
                : "text-light-100",
            )}
          >
            Bibliothèque
          </Link>
        </li>
        <li>
          <Link href="/mon-profil">
            <Avatar>
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
        <form action={logoutAction}>
          <Button type="submit">
            <Image
              src="/icons/logout.svg"
              width={20}
              height={20}
              alt="Déconnexion"
            />
          </Button>
        </form>
      </ul>
    </header>
  );
};

export default Header;
