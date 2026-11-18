import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "ALUMNI",
  description: "Conheça a plataforma Alumni para desenvolver seus projetos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
