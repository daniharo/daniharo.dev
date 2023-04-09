import "./globals.css";

export const metadata = {
  title: "Dani Haro",
  description: "Dani Haro's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full flex-col md:block">{children}</body>
    </html>
  );
}
