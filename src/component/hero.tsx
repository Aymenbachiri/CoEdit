"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/app/page";

export function Hero(): JSX.Element {
  return (
    <section className="bg-white pt-16 pb-24 sm:pt-24 sm:pb-32 dark:bg-[#222327]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={fadeIn}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="block">Collaborate in</span>
                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Real-Time
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 sm:text-xl lg:mx-0 dark:text-gray-300"
              >
                CoEdit is a powerful markdown editor that enables seamless
                real-time collaboration. Edit documents together with your team,
                see changes instantly, and focus on what matters most.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none dark:focus:ring-offset-gray-900"
                >
                  Start Editing Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md bg-gray-200 px-8 py-3 font-medium text-gray-900 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          <div className="mt-12 lg:col-span-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200 shadow-xl dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="/80 absolute inset-0 backdrop-blur-sm dark:bg-[#2a2b30]/80">
                    <div className="flex h-10 items-center border-b border-gray-200 bg-gray-100 px-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-sm font-medium text-gray-500 dark:text-gray-400">
                        Project-Roadmap.md
                      </div>
                    </div>
                    <div className="flex p-4">
                      <div className="w-1/2 border-r border-gray-200 pr-4 dark:border-gray-700">
                        <div className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mb-2 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mb-4 h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700"></div>

                        <div className="mb-3 h-5 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                      <div className="w-1/2 pl-4">
                        <div className="mb-4 flex items-center">
                          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                            JD
                          </div>
                          <div className="text-sm font-medium">John Doe</div>
                        </div>
                        <div className="mb-3 h-6 w-3/4 rounded bg-blue-100 dark:bg-blue-900/40"></div>
                        <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="mb-2 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-4 w-4/5 rounded bg-blue-100 dark:bg-blue-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute right-4 bottom-4 flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 dark:bg-green-900 dark:text-green-400">
                        AS
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-400">
                        TK
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-sm font-bold text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        +2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 flex h-40 w-40 flex-col justify-between rounded-lg border border-purple-200 bg-purple-100 p-4 shadow-lg dark:border-purple-800 dark:bg-purple-900/30"
              >
                <div>
                  <div className="mb-2 h-3 w-3/4 rounded bg-purple-200 dark:bg-purple-700"></div>
                  <div className="mb-1 h-2 w-full rounded bg-purple-200 dark:bg-purple-700"></div>
                  <div className="h-2 w-5/6 rounded bg-purple-200 dark:bg-purple-700"></div>
                </div>
                <div className="flex justify-end">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
                    AS
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-6 -right-6 flex h-40 w-40 flex-col justify-between rounded-lg border border-blue-200 bg-blue-100 p-4 shadow-lg dark:border-blue-800 dark:bg-blue-900/30"
              >
                <div className="flex justify-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                    JD
                  </div>
                </div>
                <div>
                  <div className="mb-2 h-3 w-3/4 rounded bg-blue-200 dark:bg-blue-700"></div>
                  <div className="mb-1 h-2 w-full rounded bg-blue-200 dark:bg-blue-700"></div>
                  <div className="h-2 w-5/6 rounded bg-blue-200 dark:bg-blue-700"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
