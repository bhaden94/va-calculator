import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "../common/components/Layout";

import { Metadata } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
