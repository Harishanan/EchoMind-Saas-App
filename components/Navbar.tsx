import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">
            {/* Logo Section */}
            <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/images/logo.jpg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    <span className="font-bold text-xl hidden sm:inline">EchoMind</span>
                </div>
            </Link>

            {/* Nav Items & Auth */}
            <div className="flex items-center gap-6">
                <NavItems />

                <SignedOut>
                    <SignInButton>
                        <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded hover:bg-primary-dark transition">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
