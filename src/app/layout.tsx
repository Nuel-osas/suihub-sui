import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sui | The Infrastructure for Trusted Autonomous Execution",
  description: "Sui is the infrastructure for trusted autonomous execution.",
  icons: { icon: "/assets/1644afa0-6943eb04c4c52f01cfbb6c4a_icons.png" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      data-wf-page="69179b5ae96cc07d4b72e4d1"
      data-wf-site="68e8e0120513ba12c5cd12e0"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
