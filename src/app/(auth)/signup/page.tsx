import type { Metadata } from "next";
import { SignupForm } from "../_components/signup-form";

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup page",
};

export default function page() {
  return <SignupForm />;
}
