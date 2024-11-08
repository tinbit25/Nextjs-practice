// app/layout.tsx
import Link from "next/link"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">HOme</Link>
          <Link href="/about">about</Link>
          <Link href="/products">products list</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
