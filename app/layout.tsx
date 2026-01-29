import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "App Router Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 20, background: "#eee" }}>
          <h2>My App</h2>
          <nav>
            <Link href="/">Home</Link> |{" "}
            <Link href="/about">About</Link> |{" "}
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: 20 }}>
          {children}
        </main>

        <footer style={{ padding: 20, background: "#eee" }}>
          © 2026 App Router Demo
        </footer>
      </body>
    </html>
  );
}
