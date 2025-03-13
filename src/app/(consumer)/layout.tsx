import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex items-center justify-center h-12 shadow z-10">
      <nav className="flex gap-4 container">
        <Link
          className="mr-auto text-lg hover:underline px-2 flex items-center"
          href="/"
        >
          LMS
        </Link>
        <Suspense>
          <SignedIn>
            <Link
              className="hover:underline flex items-center px-2"
              href="/courses"
            >
              My Courses
            </Link>
            <Link
              className="hover:underline flex items-center px-2"
              href="/admin"
            >
              Admin
            </Link>
            <Link
              className="hover:underline flex items-center px-2"
              href="/purchases"
            >
              Purchases History
            </Link>
            <div className="size-8 self-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: "100%", height: "100%" },
                  },
                }}
              />
            </div>
          </SignedIn>
        </Suspense>
        <Suspense>
          <SignedOut>
            <Button className="self-center" asChild>
              <SignInButton />
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
}
