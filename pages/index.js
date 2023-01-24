import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
          <body>

              <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black-900">
              <div class="container flex flex-wrap items-center justify-between mx-2 md:mx-auto">
                  <a href="https://fiveoclockclub.co/" class="flex items-center">
                      <img src="focc.png" className="h-10 mr-1 sm:h-10" alt="FiveOClockClub Logo" />
                  </a>
                  <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <svg class="w-6 h-6" aria-hidden="true" fill="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>
                  <div class="hidden w-full md:block md:w-1/2" id="navbar-default">
                      <ul class="flex flex-col font-Poppins p-4 mt-4 border border-gray-100 rounded-lg bg-black-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-black-800 md:dark:bg-black-900 dark:border-gray-700">
                          <li>
                              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                          </li>
                          <li href="#URL" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About
                          </li>
                          <li>
                              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                          </li>
                          <li>
                              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                          </li>
                          <li>
                              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
              </nav>


              <main>
                  <div className="flex flexbox justify-center m-6 font-Poppins font-extrabold text-transparent text-xl md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-teal-600">
                      <div>Experiential Networking Platform</div>
                      </div>
                  <div className="container lg:mx-auto py-10 flex flexbox flex-row  m-6 font-Poppins text-white text-s md:text-4xl lg:text-4xl ">
                      <div className="container text-xs flex-row">
                          <div className="font-extrabold justify-center text-2xl md:text-2xl lg:text-6xl">Work deserves to be FUN</div>
                          <div className="align-middle my-12 sm:text-sm md:text-xl">We pride ourselves in the ability to create events that rotate around networking in the tech space.</div>
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-teal-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                              <span class="px-16 md:px-18 md:py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                                  Get Started
                              </span>
                          </button>
                      </div>
                      <div className="object-contain lg:object-scale-down"><img src="palmnotch.png"></img></div>
                  </div>
              </main>
              <div className="flex flexbox justify-center m-6 font-Poppins font-extrabold text-transparent text-xl md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-teal-600" href="#URL">
                  <div>Go from URL to IRL</div>
              </div>
              <div className="lg:container lg:mx-auto py-10 flex flexbox justify-center m-6 font-Poppins text-white text-s md:text-4xl lg:text-4xl ">
                  <div className="flex content-center container text-xs">
                      <div className="justify-center font-extrabold mx-6 md:text-4xl">Work deserves to be FUN</div>
                      <div className="align-middle my-5 sm:text-sm md:text-xl">We pride ourselves in the ability to create events that rotate around networking in the tech space.</div>
                      <div className="justify-center font-extrabold mx-6 md:text-4xl">Work deserves to be FUN</div>
                      <div className="align-middle my-5 sm:text-sm md:text-xl">We pride ourselves in the ability to create events that rotate around networking in the tech space.</div>
                      <div className="justify-center font-extrabold mx-6 md:text-4xl">Work deserves to be FUN</div>
                      <div className="align-middle my-5 sm:text-sm md:text-xl">We pride ourselves in the ability to create events that rotate around networking in the tech space.</div>
                  </div>
              </div>
          </body>

  )
}

