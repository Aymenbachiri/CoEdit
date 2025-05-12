"use client";
import { Code, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { type JSX, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-md transition-all duration-300 dark:border-gray-800 dark:bg-[#2a2b30]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CoEdit</span>
            </motion.div>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            <motion.a
              href="#features"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              How It Works
            </motion.a>
            <motion.a
              href="#pricing"
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Pricing
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </motion.button>
            <ThemeToggle />
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-gray-200 md:hidden dark:border-gray-800"
        >
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="#features"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Pricing
            </a>
            <button className="mt-2 flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
