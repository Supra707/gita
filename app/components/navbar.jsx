'use client'
import { Navbar } from "flowbite-react";
import { Button } from "@nextui-org/button";

export function Navbarr() {
  return (
    <Navbar fluid rounded className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap neon-glow text-4xl font-semibold text-white">
          The Bhagavad Gita
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="success" className="font-bold hidden md:block">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-xl font-extrabold text-white" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-xl font-extrabold text-white" href="#">About</Navbar.Link>
        <Navbar.Link className="text-xl font-extrabold text-white" href="#">Services</Navbar.Link>
        <Navbar.Link className="text-xl font-extrabold text-white" href="#">Pricing</Navbar.Link>
        <Navbar.Link className="text-xl font-extrabold text-white" href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
