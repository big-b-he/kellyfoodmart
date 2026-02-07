import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    //    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Info */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (647) 388-7128
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> kellyfoodmart@gmail.com
            </span>
          </div>
          <div className="flex gap-4">
            <span>Wholesale Produce Specialists Since 2009</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-serif font-bold text-primary tracking-tight">
                Kelly Food Mart
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
              >
                Request Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        className={`cursor-pointer text-lg font-medium py-2 border-b border-border/50 ${
                          location === link.href
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button
                      className="w-full mt-4 bg-accent hover:bg-accent/90"
                      onClick={() => setIsOpen(false)}
                    >
                      Request Quote
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold">Kelly Food Mart</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>
                  <Link href="/">
                    <span className="hover:text-white transition-colors cursor-pointer">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <span className="hover:text-white transition-colors cursor-pointer">
                      Products
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="hover:text-white transition-colors cursor-pointer">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
  
                  <Link href="/contact">
                    <span className="hover:text-white transition-colors cursor-pointer">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 font-serif">Contact Us</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex gap-3 items-start">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                  <span>
                    1147 Bellamy Rd N #2,
                    <br />
                    Scarborough, ON M1H 1H6
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>(647) 388-7128</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>kellyfoodmart@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} Kelly Food Mart. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
