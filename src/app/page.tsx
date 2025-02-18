import Navbar from "./Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Tag, Layers, Github } from "lucide-react";
import {
  FaGithub,
  FaReact,
  FaPython,
  FaCss3Alt,
  FaDocker,
  FaSitemap,
  FaNetworkWired,
} from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col  dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="flex items-center justify-center flex-1 flex-col">
        <div className="my-36 text-center">
          {" "}
          {/* Increased margin */}
          <h1 className="text-7xl font-bold mb-20">
            {" "}
            {/* Increased bottom margin */}
            Welcome to Kritik Auto
          </h1>
          <Link href="/Scrapper" className="px-8 py-4 mb-9">
            {" "}
            {/* Increased bottom margin */}
            <Button className="px-10 py-7 text-xl font-semibold tracking-wide">
              GET STARTED
            </Button>{" "}
            {/* Increased font size */}
          </Link>
        </div>

        <Card className="w-full max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-900 mt-8 mb-16">
          <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">
                Kritik Auto Version 2
              </CardTitle>
              <Badge
                variant="secondary"
                className="bg-blue-500/20 text-blue-200"
              >
                Latest Version
              </Badge>
            </div>
            <CardDescription className="text-gray-200 text-base">
              Automating news and article posting workflow before the
              development of Kritik's new website
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 space-y-6">
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Evolution & Improvements
              </h3>
              <div className="prose dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Kritik Auto V1, developed by Aidil, covered 2 news websites
                  with terminal-based operations. While functional, it
                  simplified the tedious process of manual copying, pasting, and
                  formatting of news content and media.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Key Features
              </h2>
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <ArrowUpRight className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Extended Coverage
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Additional full support for MalayMail news website
                        integration
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Tag className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Intelligent Tag Generation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Implements TextRank & Spacy for MalayMail content,
                        automatically generating tags based on word frequency
                        scoring system
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Layers className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Smart Category Classification
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Utilizes Facebook BART-large-MNLI model for intelligent
                        content categorization through Natural Language
                        Interference
                      </p>
                      <a
                        href="https://huggingface.co/facebook/bart-large-mnli"
                        target="blank"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center gap-1 mt-2 text-sm"
                      >
                        Learn more about BART-large-MNLI
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Tech Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaReact className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        NextJS
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaPython className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        FastAPI
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaCss3Alt className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Tailwind CSS
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaSitemap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Selenium
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <FaNetworkWired className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        WebSockets
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Resources
              </h2>
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Github className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        V2
                      </h3>
                      {/* <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Additional full support for MalayMail news website
                        integration
                      </p> */}
                      <ul className="list-disc">
                        <li>
                          <span className="font-semibold">Frontend : </span>{" "}
                          <a href="https://github.com/akulaahhhh/KritikV2">
                            https://github.com/akulaahhhh/KritikV2
                          </a>
                        </li>
                        <li>
                          <span className="font-semibold">Backend : </span>{" "}
                          <a href="https://github.com/akulaahhhh/KritikV2-Backend">
                            https://github.com/akulaahhhh/KritikV2-Backend
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Github className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        V1
                      </h3>
                      {/* <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Implements TextRank & Spacy for MalayMail content,
                        automatically generating tags based on word frequency
                        scoring system
                      </p> */}
                      <ul className="list-disc">
                        <li>
                          <a href="https://github.com/aidilzohl/kritik-auto">
                            https://github.com/aidilzohl/kritik-auto
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
