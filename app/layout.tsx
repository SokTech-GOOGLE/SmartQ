import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "SmartQ",
  description: "Ask Smart Questions. Get Smart Answers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
