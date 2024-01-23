import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-green-400 min-h-screen flex flex-col">
        <UserProvider>
          <Navbar />
          <main className="flex flex-col items-center justify-center flex-grow">
            <div className="w-10/12 mx-2/12 my-16 flex-grow shadow-lg rounded bg-white">
              {children}
            </div>
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
