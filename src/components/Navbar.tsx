import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import DashboardBtn from "./DashboardBtn";
// import DasboardBtn from "./DasboardBtn";

function Navbar() {
    return (
        <nav className="border-b bg-[#0a0f2c] text-white shadow-sm">
            <div className="flex h-16 items-center w-full px-4 md:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-1 font-semibold text-2xl font-mono  transition-opacity"
                >
                    <span className="inline-flex items-center font-semibold text-3xl tracking-tight font-sans">
                        <span
                            className="text-white px-3 py-1 shadow-sm"
                            style={{
                                backgroundColor: "#2baa46",
                                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                                borderRadius: "4px",
                            }}
                        >
                            Vid
                        </span>
                        <span className="text-[#f2f2f4]">cruit</span>
                    </span>
                </Link>

                <SignedIn>
                    <div className="flex items-center ml-auto space-x-1">
                        <DashboardBtn/>
                        <ModeToggle />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>



    );
}
export default Navbar;