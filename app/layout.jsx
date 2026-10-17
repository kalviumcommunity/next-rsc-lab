import "./globals.css";

export const metadata = {
  title: "next-rsc-lab",
  description: "Server vs Client Components, shown side by side.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
