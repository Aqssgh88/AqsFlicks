import React from "react";
import { NavLink } from "react-router-dom";
import bannerImage from "../assets/images/banner.png";

export const Home = () => {
  return (
    <div>
      <section className="section-hero py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mx-auto">
          <div className="section-hero--content text-white flex flex-col justify-center">
            <p className="hero-subheading text-lg mb-2 font-semibold uppercase tracking-wider">
              Explore the Latest in Movie Industries
            </p>
            <h1 className="hero-heading text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Unlimited Movies, TV Shows, & More.
            </h1>
            <p className="hero-para text-lg mb-6 opacity-90">
              Discover the Top Best Movies and Dramas with a catchy subtitle
              like Your Ultimate Guide to Must-Watch Content.
            </p>
            <div className="flex justify-start">
              <NavLink to="/movie">
                <button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-semibold py-6 px-8 rounded-full text-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                  Movies
                </button>
              </NavLink>

            </div>
          </div>
          <div className="section-hero-image flex justify-center">
            <img src={bannerImage} alt="Banner" className="w-full h-auto rounded-full shadow-md" />
          </div>
        </div>
      </section>


      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">150</h2>
                <p class="leading-relaxed">Movies Released</p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">30K</h2>
                <p class="leading-relaxed">Subscribers</p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">350</h2>
                <p class="leading-relaxed">Actors</p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">20</h2>
                <p class="leading-relaxed">Genres</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
