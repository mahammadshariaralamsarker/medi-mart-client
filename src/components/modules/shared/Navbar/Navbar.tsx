"use client";
import { LogOut, MenuIcon, ShoppingBag } from "lucide-react";
import Logo from "../Logo/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/UserContext";
import { logOutUser } from "@/services/AuthServices";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";
import { useAppSelector } from "@/redux/hooks";
import { cartMedicineSelector } from "@/redux/features/cart/cartSlice"; 
export default function Navbar() {
  const { user, setIsLoading } = useUser(); 
  const pathname = usePathname();
  const router = useRouter();
  const medicinesAll = useAppSelector(cartMedicineSelector);

  // Handle Logout
  const handleLogout = async () => {
    await logOutUser();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
  return (
    <header className="border-b  bg-white w-full fixed top-0 z-50 shadow-sm">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
      <h1 className=" text-lg md:text-2xl font-black flex items-center">
        {<Logo />} 
      </h1>
      <div className="max-w-lg hidden md:flex flex-grow">
        <nav>
        <ul className="flex items-center gap-3 md:gap-7">
          <li>
          <Link
            href="/"
            className={`transition-all hover:text-primary ${
            pathname === "/" ? "text-primary font-bold" : ""
            }`}
          >
            Home
          </Link>
          </li>
          <li>
          <Link
            href="/shop"
            className={`transition-all hover:text-primary ${
            pathname === "/shop" ? "text-primary font-bold" : ""
            }`}
          >
            Shop
          </Link>
          </li>
          <li>
          <Link
            href="/about"
            className={`transition-all hover:text-primary ${
            pathname === "/about" ? "text-primary font-bold" : ""
            }`}
          >
            About Us
          </Link>
          </li>
          <li>
          <Link
            href="/services"
            className={`transition-all hover:text-primary ${
            pathname === "/services" ? "text-primary font-bold" : ""
            }`}
          >
            Services
          </Link>
          </li>
          <li>
          <Link
            href="/blog"
            className={`transition-all hover:text-primary ${
            pathname === "/blog" ? "text-primary font-bold" : ""
            }`}
          >
            Blog
          </Link>
          </li>
          <li>
          <Link
            href="/contact"
            className={`transition-all hover:text-primary ${
            pathname === "/contact" ? "text-primary font-bold" : ""
            }`}
          >
            Contact Us
          </Link>
          </li>
        </ul>
        </nav>
      </div>
      <div className="flex gap-2">
        <Link href="/cart">
        <Button
          variant="outline"
          className="rounded-full p-0 size-10 relative"
        >
          <div className="absolute -top-1 -right-1 bg-primary text-white w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full shadow-md">
          {medicinesAll?.length}
          </div>
          <ShoppingBag />
        </Button>
        </Link>
        <div className="md:hidden flex">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
          <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/shop">Shop</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/services">Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/blog">Blog</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {user && (
            <DropdownMenuItem>
            <Link href="/orders">Order History</Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            {user ? (
            <Link href="/profile">
              <Avatar>
              <AvatarImage
                src={`${
                user?.image ||
                "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
                }`}
              />
              <AvatarFallback className="uppercase">
                {user?.name?.slice(0, 2)}
              </AvatarFallback>
              </Avatar>
            </Link>
            ) : (
            <Link href="/login">
              <Button className="">Login</Button>
            </Link>
            )}
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="hidden md:flex">
        {user ? (
          <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
            <AvatarImage
              src={`${
              user?.image ||
              "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
              }`}
            />
            <AvatarFallback className="uppercase">
              {user?.name?.slice(0, 2)}
            </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user.role === "Customer" && (
            <>
              <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
              <Link href="/orders">Orders History</Link>
              </DropdownMenuItem>
            </>
            )}

            {user.role === "Admin" && (
            <DropdownMenuItem>
              <Link href="/admin">Dashboard</Link>
            </DropdownMenuItem>
            )}

            <DropdownMenuSeparator />
            <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleLogout}
            >
            <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
          <Button>Login</Button>
          </Link>
        )}
        </div>
      </div>
      </div>
    </header>
  );
}
