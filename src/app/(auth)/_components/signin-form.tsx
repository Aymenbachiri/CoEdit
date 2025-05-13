"use client";
import { createClient } from "@/lib/utils/supabase/client";
import { cn } from "@/lib/utils/utils";
import { authSchema, type AuthInput } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { JSX } from "react";

export function SigninForm(): JSX.Element {
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthInput>({ resolver: zodResolver(authSchema) });

  const onSubmit = async (data: AuthInput) => {
    try {
      await toast.promise(
        async () => {
          const { error } = await supabase.auth.signInWithPassword(data);
          if (error) throw error;
        },
        {
          loading: "Logging in...",
          success: "Welcome back!",
          error: (err: Error) => err.message,
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <section>
        <label className="mb-1 block font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className={cn(
            "w-full rounded border px-3 py-2",
            errors.email && "border-red-600",
          )}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </section>
      <section>
        <label className="mb-1 block font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className={cn(
            "w-full rounded border px-3 py-2",
            errors.password && "border-red-600",
          )}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </section>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-8 rounded bg-green-600 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting && <Loader2 className="animate-spin" />}
        Log In
      </button>
    </form>
  );
}
