import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { useRef, useEffect } from 'react';
import { Detector, Scroller } from '@unreal/pan'
import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';
import Typical from 'react-typical';
import { motion } from "framer-motion";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB9uK105PkbNm-TmtwRf2Jt2Vv4AJl06U8",
    authDomain: "five-o-clock-club.firebaseapp.com",
    projectId: "five-o-clock-club",
    storageBucket: "five-o-clock-club.appspot.com",
    messagingSenderId: "519034305474",
    appId: "1:519034305474:web:8564f215e5f464fc2f745b",
    measurementId: "G-FFCEGG61Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Home() {

//    const [customCursorEnabled, setCustomCursorEnabled] = useState(false)
    useEffect(() => {
//        const detector = new Detector()

        const scroller = new Scroller()
        const elements = document.getElementsByClassName('fade-in')
        for (const element of elements){
            scroller.whenElementInViewport(element, () => {
                element.style.opacity=1;
                },{ offset: -200})
        }
    })



  return (
<>
                  <nav class="border-zinc-200 px-2 sm:px-4 py-2.5 rounded bg-black">
                  <div class="container flex items-center justify-between mx-2 md:mx-auto">
                      <Link to="/cs" class="flex justify-center mx-12">
                          <div className="flex flexbox px-16 py-8 lg:mx-auto">
                              <Image src="/focc.png"  width="350" height="40" alt="FiveOClockClub Logo" />
                          </div>
                      </Link>
                      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" aria-controls="navbar-default" aria-expanded="false">
                          <span class="sr-only">Open main menu</span>
                          <svg class="w-6 h-6" aria-hidden="true" fill="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      </button>
                      <div class="hidden w-full md:block md:w-1/2" id="navbar-default">
                          <ul class="flex flex-col justify-center font-Poppins border border-zinc-100 rounded-lg md:flex-row md:space-x-8 md:text-xl md:font-medium md:border-0 md:bg-rgb(20, 20, 20)">
                              <li>
                                  <a href="#" class="text-white-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0">EXPERIENCES</a>
                              </li>
                              <li href="#" class="py-2 text-white-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0">GALLERY
                              </li>
                              <li>
                                  <a href="#" class="py-2 text-white-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0">CONTACT</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <main className="bg-black">
                  <div className="container bg-ocircles bg-cover mx-auto px-24 py-10 flex flexbox justify-center m-6 font-Poppins text-white text-s md:text-4xl lg:text-4xl h-[50rem]">
                      <div className="text-xs mx-4 flex-row ">
                          <div className="-space-y-2 lg:-space-y-8"> <div className="mx-6 font-extrabold justify-center  text-2xl md:text-xl lg:text-6xl transform transition duration-500 hover:scale-110">Experiential</div>
                              <div className="mx-6 font-extrabold justify-center -py-4  text-2xl md:text-2xl lg:text-6xl transform transition duration-500 hover:scale-110">Networking</div>
                              <div className="mx-6 font-extrabold text-transparent text-2xl md:text-2xl lg:text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 transform transition duration-500 hover:scale-110">Platform</div>
                             </div>
                          <div className="mx-6 my-6 sm:text-sm md:text-xl">Join the club for exclusive access to unique networking experiences & snackable content produced live from our mobile Creator Studio alongside the most influential digital advertising events across the globe.</div>
                          <button class="mx-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-Poppins text-zinc-900 rounded-2xl group bg-gradient-to-br from-red-700 to-orange-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                              <span class="px-16 md:px-18 md:py-1 font-Poppins transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-2xl group-hover:bg-opacity-0">
                                  Join the Club
                              </span>
                          </button>
                      </div>
                      <div className="object-contain flex flexbox flex-col -space-y-2 justify-center hover:scale-110"><Image class="" src="/landing.png" width="1200" height="1000"></Image></div>
                  </div>

                  <div className="container w-400px bg-white-100 pt-14">
                      <div className="h-[200px] m-auto overflow-hidden relative w-auto">
                          <ul className="flex justify-center w-[calc(250px*14)] animate-scroll">
                              <li className="mx-5 w-[150px]"><Image class="" src="/adjust.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/apptweak.png" width="1200" height="800"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/blindferret.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/craftsman.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/fluent.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/mintegral.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/singular.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/tmobile.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/vungle.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/moloco.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/gopro.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/tipalti.png" width="1200" height="1000"></Image></li>
                              <li className="mx-5 w-[250px]"><Image class="" src="/jamcity.png" width="1200" height="1000"></Image></li>
                          </ul>
                      </div>
                  </div>

                  <div className="container grid place-items-center bg-circles bg-cover h-[60rem] transition opacity ease-out duration-500">
                  <div className="container pt-14 flex justify-center font-Poppins text-transparent text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600" href="#URL">
                      <div class="grid place-items-center fade-in opacity-0 transition opacity ease-out duration-500">Work deserves to be</div>
                      </div>
                      <div className="inline-block container flex justify-center font-Poppins font-semibold text-transparent text-4xl md:text-4xl lg:text-6xl bg-clip-text bg-white" href="#URL">
 <strong className="container flex -py-4  font-semibold font-Poppins flexbox justify-center px-16 text-6xl md:text-4xl lg:text-5xl fade-in opacity-0 transition opacity ease-out duration-500">
                              <p>{''}
                                  <Typical
                                      className="text-6xl"
                                      wrapper="b"
                                      loop={Infinity}
                                      steps={[
                                      'HAPPY',
                                      2000,
                                      'FUN',
                                      2000,
                                      'AUTHENTIC',
                                      2000,
                                      ]}
                                  />
                              </p>
                          </strong>
                      </div>
                 </div>




                  <div className="container flex flexbox justify-center font-Poppins flexbox pt-32 bg-orangedrop ">
                      <div class="px-2">
                          <div class="flex -mx-2 fade-in opacity-0 transition opacity ease-out duration-500">
                              <div class="w-1/3 mx-6 px-4 bg-party1 h-[34.7rem] w-[22.8rem] transform transition duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                  <div className="grid place-items-center h-[500px] font-semibold font-poppins text-4xl [backface-visibility:hidden]"></div>
                                  <div className="grid place-items-center h-[500px] font-semibold font-poppins text-4xl ">
                      </div>

                              </div>
                              <div class="w-1/3 mx-6 px-4 bg-party2 h-[34.7rem] w-[22.8rem] transform transition duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                  <div className="grid place-items-center h-[500px] font-semibold font-poppins text-4xl">CREATOR LAB </div>
                              </div>
                              <div class="w-1/3 mx-6 px-4 bg-party3 h-[34.7rem] w-[22.8rem] transform transition duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                  <div className="grid place-items-center h-[500px] font-semibold font-poppins text-4xl">BESPOKE COWORKING LOUNGES</div>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="transform transition duration-500">
                  <div class="relative flex min-h-screen pt-20 flex-col items-center justify-center overflow-hidden bg-black z-0 transform transition duration-500">
                  <div class="relative flex w-full scale-y-135 items-center justify-center">
                      <div class="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-orange-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
                      <div class="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-orange-500 text-white [--conic-position:from_290deg_at_center_top]"></div>
                      <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
                      <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                      <div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-orange-500 opacity-50 blur-3xl"></div>
                      <div class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-orange-400 blur-2xl"></div>
                      <div class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-orange-400 blur-sm"></div>

                      <div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
                  </div>

                  <div class="relative z-50 flex flex-col items-center px-5">
</div>

                      <div className="container flex -py-4 my-12 pt-34 justify-center font-semibold font-Poppins flexbox px-6 text-2xl md:text-4xl lg:text-5xl">
                      </div>


                      <div className="container bg-cover h-[30rem] w-[36rem] fade-in opacity-0 transition opacity ease-out duration-500">
                          <div className="flex flexbox flex-row justify-center container space-between pb-12 ">
                              <div className=" py-5 justify-center w-1/2 transform transition duration-500 ">
                                  <div className="mx-4 my-3 font-poppins text-orange-600 font-bold text-4xl flex justify-center">3</div>
                                  <div className="mx-10 my-2 flex justify-center">Cities</div>
                              </div>
                              <div className="px-5 py-5 transform transition duration-500 hover:scale-110">
                                  <div className="mx-10 my-3 font-poppins text-orange-600 font-bold text-4xl flex justify-center">40+</div>
                                  <div className="mx-10 my-2 flex justify-center">Happy Hours</div>
                              </div>
                              <div className=" py-5 justify-center w-1/2 transform transition duration-500 hover:scale-110">
                                  <div className="mx-4 my-3 font-poppins text-orange-600 font-bold text-4xl flex justify-center">10K+</div>
                                  <div className="mx-10 my-2 flex justify-center">Happy Attendees</div>
                              </div>
                              <div className=" py-5 justify-center w-1/2 transform transition duration-500 hover:scale-110">
                                  <div className="mx-4 my-3 font-poppins text-orange-600 font-bold text-4xl flex justify-center">10K+</div>
                                  <div className="mx-10 my-2 flex justify-center">Happy Attendees</div>
                              </div>
                          </div>
                          <div className="container bg-cover h-[36rem] w-[36rem] fade-in opacity-0 transition opacity ease-out duration-500">
                              <div className="flex flexbox flex-row justify-center container space-between pb-12 ">
                                  <div className=" py-5 justify-center w-1/2 transform transition duration-500 ">
                                      <div className="mx-4 my-3 font-poppins text-orange-400 font-bold text-4xl flex justify-center">3</div>
                                      <div className="mx-10 my-2 flex justify-center">Cities</div>
                                  </div>
                                  <div className="px-5 py-5 transform transition duration-500 hover:scale-110 pt-22">
                                      <div className="mx-10 my-3 font-poppins text-orange-400 font-bold text-4xl flex justify-center">40+</div>
                                      <div className="mx-10 my-2 flex justify-center">Happy Hours</div>
                                  </div>
                                  <div className=" py-5 justify-center w-1/2 transform transition duration-500 hover:scale-110">
                                      <div className="mx-4 my-3 font-poppins text-orange-400 font-bold text-4xl flex justify-center">10K+</div>
                                      <div className="mx-10 my-2 flex justify-center">Happy Attendees</div>
                                  </div>
                                  <div className=" py-5 justify-center w-1/2 transform transition duration-500 hover:scale-110">
                                      <div className="mx-4 my-3 font-poppins text-orange-400 font-bold text-4xl flex justify-center">10K+</div>
                                      <div className="mx-10 my-2 flex justify-center">Happy Attendees</div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
                  </div>


                  <div className="container flex justify-center font-semibold font-Poppins flexbox my-16 px-6 text-2xl md:text-3xl lg:text-5xl transition opacity ease-out duration-500"><div class="">ITS FIVE O'CLOCK SOMEWHERE</div></div>
                  <div className="flex flexbox justify-center transition opacity ease-out duration-500">
                      <Image src="/oclock.png" height="80" width="80" className="mx-9"></Image>
                      <Image src="/wclock.png" height="80" width="140"></Image>
                      <Image src="/wclock.png" height="80" width="140"></Image>
                      <Image src="/wclock.png" height="80" width="140"></Image>
                  </div>
                  <div className="container flex flexbox justify-center space-between mx-16 py-6 transition opacity ease-out duration-500">
                      <div className="mx-8">San Francisco</div>
                      <div className="mx-8">New York</div>
                      <div className="mx-8 ">Los Angeles</div>
                      <div className="mx-12">Paris</div>
                  </div>

                  <div id="cs" className="container flex pb-12 font-semibold font-Poppins flexbox my-16 px-6 text-2xl md:text-4xl lg:text-5xl fade-in opacity-0 transition opacity ease-out duration-500 fade-in opacity-0 transition opacity ease-out duration-500 justify-center"><div class="">AMPLIFY & INTEGRATE</div></div>

                  <div className="container justify-center flex pt-24 pb-24">

                      <a href="#" class="container flex flexbox justify-center mx-6 items-center bg-black border border-white rounded-3xl shadow md:flex-row md:max-w-xl hover:bg-black dark:border-gray-700 transition opacity ease-out duration-500 hover:scale-110">
                      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/party2.png" ></img>
                      <div class="flex flex-col justify-center p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Premier</h5>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Our premier package offers services for your community</p>
                      </div>
                  </a>
                  </div>







              </main>


<footer class="container bg-black fade-in opacity-0 transition opacity ease-out duration-500">


                  <div class="px-4 py-6 bg-black md:flex md:items-center md:justify-between">
                      <span class="text-sm text-zinc-500 dark:text-zinc-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Five O'Clock Club 2023™</a>. All Rights Reserved. - Designed & Built by Max Gold & 0xChampi of attn.studios & attn.labs
                      </span>
                      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                          <a href="#" class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">Facebook page</span>
                          </a>
                          <a href="#" class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">Instagram page</span>
                          </a>
                          <a href="#" class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                              <span class="sr-only">Twitter page</span>
                          </a>
                          <a href="#" class="text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">GitHub account</span>
                          </a>

                      </div>
                  </div>
                  </footer>

</>

          )
}

