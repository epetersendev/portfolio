import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Petersen — Senior Developer",
  description:
    "Senior developer building CMS-driven websites, Dynamics 365 solutions, and .NET back ends.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">
              Eric Petersen
            </Link>
            <nav>
              <Link href="/#work">Work</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">© {new Date().getFullYear()} Eric Petersen · Northlake, TX</div>
        </footer>
      </body>
    </html>
  );
}
