import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg hover:text-gray-300">
          Home
        </Link>
        <div className="flex items-center gap-5">
          <Link
            href="/Scrapper"
            className="text-white text-lg hover:text-gray-300"
          >
            Scrapper
          </Link>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
