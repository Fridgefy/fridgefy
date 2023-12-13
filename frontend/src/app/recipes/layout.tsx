import type { Metadata } from "next";

import "@/styles/globals.css";
import { siteConfig } from "@/confg/site";
import { RecipeLayout } from "@/components/layouts";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <RecipeLayout>{children}</RecipeLayout>
    </Providers>
  );
}
