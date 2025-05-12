"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import { Clock, Code, Share2, Users, Zap } from "lucide-react";

export function Features(): JSX.Element {
  return (
    <section id="features" className="bg-gray-50 py-16 dark:bg-[#2a2b30]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Powerful Features for Seamless Collaboration
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Everything you need to create, edit, and collaborate on markdown
            documents in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-gray-200 p-6 shadow-md dark:border-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Real-Time Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              See changes as they happen. Multiple users can edit the same
              document simultaneously without conflicts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-gray-200 p-6 shadow-md dark:border-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Markdown Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full markdown support with syntax highlighting, preview mode, and
              custom extensions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl border border-gray-200 p-6 shadow-md dark:border-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Version History</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track changes over time and revert to previous versions with a
              complete history of edits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl border border-gray-200 p-6 shadow-md dark:border-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <Share2 className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Easy Sharing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share documents with custom permissions. Control who can view,
              edit, or comment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-xl border border-gray-200 p-6 shadow-md dark:border-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
              <Code className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Code Blocks</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Syntax highlighting for over 100 programming languages with
              customizable themes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-xl border border-gray-200 p-6 shadow-md dark:border-gray-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <div className="flex h-6 w-6 items-center justify-center text-indigo-600 dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Offline Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Keep working even when offline. Changes sync automatically when
              you&apos;re back online.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
