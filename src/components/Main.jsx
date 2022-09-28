import React, { Component } from "react";
import Sevier from "./Sevier.png";
import Video from "./BioRender.mp4";
import ZNotes from "./ZNotes.png";
import Microbiology from "./Microbiology.png";
export default class Main extends Component {
  render() {
    return (
      <>
        <div class="relative flex py-5 items-center" id="Bio">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Biology{" "}
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>
        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  <a href=" https://biorender.com" target="_blank">
                    BioRender
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  BioRender has revolutionized the way we draw and communicate
                  our science. Because of the large number of pre-drawn icons
                  and color schemes to choose from, I can create beautiful
                  images that accurately depict our scientific findings in no
                  time. I don't know what I would do without BioRender. ~ Akiko
                  Iwasaki, PhD Professor, Dept. of Immunobiology, Yale School of
                  Medicine, HHMI.
                </p>
                <video
                  class="my-10 object-fill w-80 mx-auto"
                  autoplay
                  muted
                  controls
                >
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://smart.servier.com" target="_blank">
                    Servier Medical Art
                  </a>
                </h1>
                <p class="text-left ml-1 text-black ">
                  Servier Medical Art provides you with thousands of
                  professionally designed medical elements for your
                  presentations and your scientific publications. 3000 Free
                  medical images to illustrate your publications and Powerpoint
                  presentations.
                </p>
                <img
                  class="my-10 object-fill w-80 mx-auto"
                  src={Sevier}
                  alt="hey"
                />
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a
                    href=" https://znotes.org/caie/igcse/biology-0610/theory/organization-of-the-organism/"
                    target="_blank"
                  >
                    {" "}
                    ZNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Join over 3 million learners using ZNotes to maximise their
                  potential with 100% free access to the highest quality
                  resources. All created for students, by students. Find your
                  exam board, explore quality subjects and study from
                  high-quality, syllabus-specific exam revision notes written by
                  top students.
                </p>
                <img
                  class="my-10 object-fill w-80 mx-auto"
                  src={ZNotes}
                  alt="hey"
                />
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href="https://microbiologyinfo.com" target="_blank">
                    {" "}
                    Microbiologyinfo
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                Microbiology Notes on Bacteriology, Virology, Parasitology, Mycology, Immunology, Laboratory, Cultural Media, Biochemical Test, Staining and much more! constantly growing and evolving collection of microbiology notes and information. Whether you’re a student, professor, working in the medical field or just curious about microbiology, I’m sure you’ll find our articles interesting and informative.
                </p>
                <img
                  class="my-10 object-fill w-80 mx-auto h-fit	" 
                  src={Microbiology}
                  alt="hey"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex py-5 items-center" id="Calc">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Calculus
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>
        <br></br>
        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex py-5 items-center" id="Chem">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Chemistry
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>
        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex py-5 items-center" id="CompSci">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Computer Science
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>
        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex py-5 items-center" id="GM">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            General Math
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>

        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex py-5 items-center" id="GS">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            General Science
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>

        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex py-5 items-center" id="HPE">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Health and P.E{" "}
          </span>
          <div class="flex-grow border-t border-green-400 border-double"> </div>
        </div>

        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex py-5 items-center" id="Physics">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Physics
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>

        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex py-5 items-center h-full" id="Writing">
          <div class="flex-grow border-t border-green-400 border-double"></div>
          <span class="flex-shrink mx-4 font-extrabold text-gray-400 border-double text-bold text-lg">
            Writing
          </span>
          <div class="flex-grow border-t border-green-400 border-double"></div>
        </div>

        <div class="px-10 py-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  h-max max-w-fit ml-4">
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://speedwrite.com" target="_blank">
                    {" "}
                    Speedwrite
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  🚀 Speedwrite is insanely fast. It generates new, unique,
                  best-in-class writing, from any source text. Trusted by
                  hundreds of thousands of users, Speedwrite has written
                  millions of lines of text. Speedwrite creates fresh, original
                  text, with amazingly good style and grammar.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100 h-auto w-auto	">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" https://www.sparknotes.com" target="_blank">
                    {" "}
                    SparkNotes
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  SparkNotes are the most helpful study guides around to
                  literature, math, science, and more. Find sample tests, essay
                  help, and even translations of Shakespeare.
                </p>
              </div>
            </div>
            <div class=" flex border-2 border-gray-300 rounded-xl bg-gray-100">
              <div>
                <h1 class="text-center underline visited:text-purple-500 hover:text-blue-700">
                  {" "}
                  <a href=" " target="_blank">
                    {" "}
                    Quilbot
                  </a>
                </h1>
                <p class="text-left ml-1 text-black">
                  Write better, faster, and clearer with the best artificial
                  intelligence paraphrasing tool. Free paraphrasing tool:
                  rewrite any article or content. Try 7 different rewriting
                  modes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
