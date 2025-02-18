import Navbar from "./Navbar";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex items-center justify-center flex-1 flex-col">
        <h1 className="text-6xl font-bold m-5">Welcome to Kritik Auto</h1>
        <Link href="/Scrapper" className="px-8 py-4 ">
        <Button className="">GET STARTED</Button>
        </Link>
      </div>
    </div>
  );
}
