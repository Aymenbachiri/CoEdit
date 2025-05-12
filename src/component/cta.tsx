"use client";

import type { JSX } from "react";
import { motion } from "motion/react";

export function CTA(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Collaboration?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80">
            Join thousands of teams who are already using CoEdit to streamline
            their workflow and boost productivity.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md px-8 py-3 font-medium hover:bg-gray-100 hover:text-blue-600 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:/10 rounded-md border border-white bg-transparent px-8 py-3 font-medium text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
