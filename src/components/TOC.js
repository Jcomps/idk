import React, { Component } from "react";
import { Link } from "react-scroll";

export default class TOC extends Component {
  render() {
    return (
      <>
        <br id="Home"></br>
        <body class="flex items-center justify-center">
          <div class="container">
            <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead class="text-white">
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
                <tr class="bg-slate-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ml-4">
                  <th class="p-3 text-left">Subject</th>
                  <th class="p-3 text-left">Description</th>
                  <th class="p-3 text-left" width="110px">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody class="flex-1 sm:flex-none bg-zinc-400">
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Biology
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    contato@johncovv.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="Bio" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Calculus
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    m_jackson@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="Calc" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Chemistry
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    julia@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="Chem" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Computer Science
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    martin.madrazo@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="CompSci" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    General Math
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    martin.madrazo@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="GM" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    General Science
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    contato@johncovv.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="GS" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Health and P.E
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    m_jackson@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="HPE" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Physics
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    julia@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="Physics" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-zinc-400 p-3">
                    Writing
                  </td>
                  <td class="border-grey-light border hover:bg-zinc-400 p-3 truncate">
                    martin.madrazo@mail.com
                  </td>
                  <td class=" border-grey-light border p-3 hover:text-red-600 hover:font-medium cursor-pointer">
                    <Link to="Writing" spy={true} smooth={true}>
                      Click Me
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </body>
      </>
    );
  }
}
