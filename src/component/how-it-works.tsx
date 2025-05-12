"use client";

import { motion } from "motion/react";
import type { JSX } from "react";

export function HowItWorks(): JSX.Element {
  return (
    <section id="how-it-works" className="bg-white py-16 dark:bg-[#2a2b30]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">How CoEdit Works</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Simple, intuitive, and powerful. Get started in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              1
            </div>
            <div className="pt-16 text-center">
              <h3 className="mb-4 text-xl font-bold">Create a Document</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start with a blank document or choose from our templates. Give
                it a name and you&apos;re ready to go.
              </p>
              <div className="mt-6 flex h-48 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="h-3/4 w-3/4 rounded-md p-4 shadow-md">
                  <div className="mb-4 h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-2 h-3 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-2 h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              2
            </div>
            <div className="pt-16 text-center">
              <h3 className="mb-4 text-xl font-bold">Invite Collaborators</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share a link with your team members. Set permissions for who can
                edit or view.
              </p>
              <div className="mt-6 flex h-48 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="h-3/4 w-3/4 rounded-md p-4 shadow-md">
                  <div className="mb-4 flex items-center">
                    <div className="mr-2 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900"></div>
                    <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="ml-auto h-6 w-16 rounded bg-green-100 dark:bg-green-900/30"></div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <div className="mr-2 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900"></div>
                    <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="ml-auto h-6 w-16 rounded bg-yellow-100 dark:bg-yellow-900/30"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-400 dark:bg-gray-700">
                      +
                    </div>
                    <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              3
            </div>
            <div className="pt-16 text-center">
              <h3 className="mb-4 text-xl font-bold">Edit Together</h3>
              <p className="text-gray-600 dark:text-gray-300">
                See changes in real-time as your team edits. Add comments and
                suggestions.
              </p>
              <div className="mt-6 flex h-48 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="relative h-3/4 w-3/4 rounded-md p-4 shadow-md">
                  <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-2 h-4 w-5/6 rounded bg-blue-100 dark:bg-blue-900/30"></div>
                  <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-4 w-4/5 rounded bg-purple-100 dark:bg-purple-900/30"></div>
                  <div className="absolute right-2 bottom-2 flex space-x-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                      J
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
                      A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
