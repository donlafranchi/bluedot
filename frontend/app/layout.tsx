import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Blue Dot",
  description: "Action-first civic companion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-indigo-950 text-slate-50">
        <main className="mx-auto min-h-screen w-full max-w-xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
