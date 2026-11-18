import type { Metadata } from "next";
import { LoginClientPage } from "./LoginClientPage";

export const metadata: Metadata = {
  title: "Entrar | Alumni",
  description: "Acesse seu espaço de projetos no Alumni.",
};

export default function LoginPage() {
  return <LoginClientPage />;
}
