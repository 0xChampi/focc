import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
          <body>

              <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black-900">
                  <div class="container flex flex-wrap items-center justify-between mx-2 md:mx-auto">
                      <Link href="https://fiveoclockclub.co/" class="flex items-center">
                          <img src="focc.png" className="h-10 mr-1 sm:h-10" alt="FiveOClockClub Logo" />
                      </Link>
                      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                          <span class="sr-only">Open main menu</span>
                          <svg class="w-6 h-6" aria-hidden="true" fill="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      </button>
                      <div class="hidden w-full md:block md:w-1/2" id="navbar-default">
                          <ul class="flex flex-col font-Poppins p-4 mt-4 border border-gray-100 rounded-lg bg-black-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-black-800 md:dark:bg-black-900 dark:border-gray-700">
                              <li>
                                  <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-700 md:p-0 dark:text-white" aria-current="page">HOME</a>
                              </li>
                              <li href="#" class="block py-2 pl-3 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT
                              </li>
                              <li>
                                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SERVICES</a>
                              </li>
                              <li>
                                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PRICING</a>
                              </li>
                              <li>
                                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <main>
                  <div className="container lg:mx-auto py-10 flex flexbox flex-row  m-6 font-Poppins text-white text-s md:text-4xl lg:text-4xl ">
                      <div className="container text-xs flex-row">
                          <div className="font-extrabold justify-center py-4 md:py-10 text-2xl md:text-2xl lg:text-6xl">Experiential Networking Platform</div>
                          <div className="align-middle my-6 sm:text-sm md:text-l">Join the club for exclusive access to unique networking experiences & snackable content produced live from our mobile Creator Studio alongside the most influential digital advertising events across the globe.</div>
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-Poppins text-gray-900 rounded-lg group bg-gradient-to-br from-orange-700 to-yellow-600 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                              <span class="px-16 md:px-18 md:py-2 font-Poppins transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                                  Get Started
                              </span>
                          </button>
                      </div>
                      <div className="object-contain flex flexbox flex-col justify-center lg:object-scale-down"><img class="" src="palmnotch.png"></img></div>
                  </div>


              <div className="container lg:mx-auto font-Poppins text-white text-s md:text-4xl lg:text-4xl ">
                <div className="container flex justify-center font-Poppins text-transparent text-xl md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600" href="#URL">
                    <div class="">WORK DESERVES TO BE</div>
              </div>
              <div className="container flex justify-center font-Poppins font-semibold text-transparent text-4xl md:text-4xl lg:text-6xl bg-clip-text bg-white" href="#URL">
                  <div>HAPPY</div>
                    </div>
                </div>

                  <div className="container flex justify-center font-semibold font-Poppins flexbox my-16 px-6 text-2xl md:text-2xl lg:text-6xl"><div class="">From URL to IRL</div></div>

                  <div class="container justify-between flex flex-row md:object-scale-down px-6 my-16 px-12 lg:px-16 md:py-6 rounded-lg shadow-xl bg-transparent">
                      <img src="party1.png" alt="" className="rounded-t-lg h-40 w-30 md:h-80 md:h-30 lg:mx-auto"/>
                      <img src="party2.png" alt="" className="rounded-t-lg h-40 w-30 md:h-80 md:h-30 lg:mx-auto"/>
                      <img src="party3.png" alt="" className="rounded-t-lg h-40 w-30 md:h-80 md:h-30 lg:mx-auto"/>
              </div>

                  <div class="container flex flex-row justify-center px-6 py-6 md:object-scale-down rounded-lg shadow-xl bg-transparent">
                      <img src="joinus.png" alt="" class="rounded-t-lg object-cover"/>
                  </div>

                  <div className="container flex font-semibold font-Poppins flexbox py-10 px-6 text-2xl md:text-2xl lg:text-6xl">Unique Experiences</div>
                  <svg class="animate-bounce w-6 h-6 ...">
             asd
                  </svg>


              </main>
          </body>

  )
}

