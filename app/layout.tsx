import "@/app/ui/global.css";
import { inter, sora } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>{children}</body>
    </html>
  );
}
