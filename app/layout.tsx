import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task-management",
  description: "Website for task management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div
          className="
    flex
    flex-row
    gap-4
    p-10
  "
        >
          <SideBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
