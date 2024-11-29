'use client'
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  
  // Check if the current path includes 'chapters' directly in the render
  const isChaptersPage = pathname.includes('chapters');

  return (
    <div className="w-full h-16 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600">
      <div className="relative top-[15px] flex justify-center gap-x-8 md:justify-around items-center">
        <div className="flex gap-x-96 ml-4 items-center">
          <Link href="/">
            <span className="self-center whitespace-nowrap neon-glow text-4xl font-semibold text-white">
              श्रीमद्भगवद्गीता
            </span>
          </Link>
          <div className="gap-x-4 hidden md:flex">
            <Link className="text-xl font-extrabold text-white" href="/" >
              Home
            </Link>
            <Link className="text-xl font-extrabold text-white" href="/about">
              About
            </Link>
            <Link className="text-xl font-extrabold text-white" href="/contactus">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Conditionally render the button based on the path */}
        {!isChaptersPage && (
          <Link href="/chapters">
            <Button color="success" className="box-glow font-bold hover:scale-105 transition all duration-2000">
              Go to Chapters
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
