import type { Metadata } from "next";
import { SigninForm } from "../_components/signin-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function page() {
  return <SigninForm />;
}
