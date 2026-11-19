import type { Metadata } from "next";
import { RegisterClientPage } from "./RegisterClientPage";

export const metadata: Metadata = {
  title: "Cadastro | Alumni",
  description: "Crie sua conta para começar a usar o Alumni.",
};

export default function RegisterPage() {
  return <RegisterClientPage />;
}
