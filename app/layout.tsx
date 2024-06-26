import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import BlogLogo from "@/components/BlogLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JinLog",
  description: "Jin의 블로그입니다.",
  icons: {
    icon: /favicon.ico/,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <BlogLogo />
                <nav className="ml-auto mr-3 text-sm font-medium space-x-6">
                  <Link href="/">Blog</Link>
                  <Link href="/graph-view">Graph View</Link>
                  <Link href="/about">About</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
