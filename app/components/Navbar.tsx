import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  // console.log("Session from the Navbar: ", session);
  return (
    <>
      <header className="px-5 py-4 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/home">
            <Image
              src="/logo.png"
              alt="logo"
              width={175}
              height={42}
              className="-translate-y-1"
            />
          </Link>

          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span className="max-sm:hidden font-semibold">Create</span>
                  <BadgePlus className="size-6 sm:hidden" />
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit">
                    <span className="max-sm:hidden font-semibold">Logout</span>
                    <LogOut className="size-6 sm:hidden text-red-500" />
                  </button>
                </form>

                <Link href={`/user/${session?.id}`}>
                  <Image
                    src={session?.user.image || ""}
                    alt={session?.user.name || ""}
                    width={40} 
                    height={40}
                    className="rounded-full"
                    placeholder="blur"
                    blurDataURL="../default-avatar.png"
                  />
                  {/* <Avatar className="size-10">
                  <AvatarImage src={session?.user.image || ""} alt={session?.user.name || ""} />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar> */}
                </Link>
              </>
            ) : (
              <>
                <form
                  action={async () => {
                    "use server";
                    await signIn("github");
                  }}
                >
                  <button
                    type="submit"
                    className="flex items-center gap-2 border-2 border-black rounded-lg px-4 py-2 text-black font-semibold transition-all duration-300 shadow-100 hover:shadow-110 
    sm:px-4 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-4 lg:py-2 lg:text-md"
                  >
                    <Github className="size-4 sm:size-4 md:size-4.5 lg:size-5" />
                    <span className="hidden sm:block">Login with GitHub</span>
                    <span className="block sm:hidden">Login</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
