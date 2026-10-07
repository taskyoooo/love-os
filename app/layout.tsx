import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Love OS｜恋爱小白操作系统",
  description: "少猜心理，多看行为；少学套路，多做验证。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
