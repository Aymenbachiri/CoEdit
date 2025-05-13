import { Code } from "lucide-react";
import type { JSX } from "react";

const linkListsArray = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Support", href: "#" },
      { label: "API", href: "#" },
    ],
  },
];

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#2a2b30]">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CoEdit</span>
            </div>
            <p className="mb-4 max-w-xs text-gray-600 dark:text-gray-300">
              The real-time collaborative markdown editor that helps teams work
              better together.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://github.com/Aymenbachiri/CoEdit"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <>
            {" "}
            {linkListsArray.map((listSection, index) => (
              <div key={index}>
                {" "}
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
                  {listSection.title}
                </h3>
                <ul className="space-y-3">
                  {listSection.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {" "}
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-300">
          <div className="">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} CoEdit. All rights reserved.
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with ❤️ by{" "}
            <a
              target="_blank"
              className="underline"
              href="https://www.linkedin.com/in/aymen-bachiri-9442b5287/"
            >
              Aymen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
