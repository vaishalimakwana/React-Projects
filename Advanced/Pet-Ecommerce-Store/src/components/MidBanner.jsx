import React from 'react';
import BestOffers from '../assets/BestOffers.jpg';
import PetKits from '../assets/PetKits.jpg';
import TopPicks from '../assets/TopPicks.jpg';
import GroomingProducts from '../assets/Grooming-Products.jpg';
import Harness from '../assets/Harness.jpg';
import RainWearDogs from '../assets/RainWearDogs.jpg';
import { Link } from 'react-router-dom';
const MidBanner = () => {
  return (
    <div className="bg-brandcolor pt-16 pb-16">
      <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 gap-4 py-6 max-w-7xl mx-auto">
        {/* First Banner */}
        <div className="group cursor-pointer overflow-hidden relative h-[250px] bg-cover">
          <img
            src={BestOffers}
            alt="New Arrivals"
            className="w-full h-full object-cover transition-transform duration-700
            group-hover:scale-125"
          />
          <div
            className="absolute inset-0 bg-black rounded-lg bg-opacity-50
          flex flex-col items-center justify-center"
          >
            <h2 className="text-white text-2xl font-bold">Best Offers</h2>
            <button className="mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow">
              Shop Now
            </button>
          </div>
        </div>
        {/* First Banner */}
        {/* Second Banner */}
        <div className="group cursor-pointer overflow-hidden relative h-[250px] bg-cover">
          <img
            src={PetKits}
            alt="Pet Kits"
            className="w-full h-full object-cover transition-transform duration-700
            group-hover:scale-125"
          />
          <div
            className="absolute inset-0 bg-black rounded-lg bg-opacity-35
          flex flex-col items-center justify-center"
          >
            <h2 className="text-white text-2xl font-bold">Pet Kits</h2>
            <button className="mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow">
              Shop Now
            </button>
          </div>
        </div>
        {/* Second Banner */}
        {/* Third Banner */}
        <div className="group cursor-pointer overflow-hidden relative h-[250px] bg-cover ">
          <Link to="/dogclothing">
            <img
              src={RainWearDogs}
              alt="Rain Wear For Dogs"
              className="w-full h-full object-cover transition-transform duration-700
            group-hover:scale-125"
            />
            <div
              className="absolute inset-0 bg-black rounded-lg bg-opacity-50
          flex flex-col items-center justify-center"
            >
              <h2 className="text-white text-2xl font-bold">Dog Clothing</h2>
              <p className="text-white my-2 text-lg">Upto 50% OFF</p>
              <button className="mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
        {/* Third Banner */}
        {/* Fourth & Fifth Wrapper */}
        <div className="md:col-span-3 flex flex-col md:flex-row gap-4">
          {/* Fourth Banner */}
          <div className="group cursor-pointer overflow-hidden relative h-[250px] bg-cover flex-1">
            <img
              src={Harness}
              alt="Harness and Leashes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
              <h2 className="text-white text-2xl font-bold">
                Harness & Leashes
              </h2>
              <button className="mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow">
                Shop Now
              </button>
            </div>
          </div>
          {/* Fifth Banner */}
          <div className="group cursor-pointer overflow-hidden relative h-[250px] bg-cover flex-1">
            <Link to="foodandtreats">
              <img
                src={TopPicks}
                alt="Top Picks"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
                <h2 className="text-white text-2xl font-bold">Dry food</h2>
                <button className="mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow">
                  Shop Now
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Sixth Banner */}
        <div className="group cursor-pointer overflow-hidden relative h-[250px] bg-cover md:col-span-3">
          <Link to="/healthandgrooming">
            {' '}
            <img
              src={GroomingProducts}
              alt="Grooming Products"
              className="w-full h-full object-cover transition-transform duration-700
            group-hover:scale-125"
            />
            <div
              className="absolute inset-0 bg-black rounded-lg bg-opacity-50
          flex flex-col items-center justify-center"
            >
              <h2 className="text-white text-2xl font-bold">
                Top Grooming Products
              </h2>
              <p className="text-white my-2 text-lg">Upto 80% OFF</p>
              <button className="mt-2 px-2 py-1 bg-brandnamecolor text-white rounded-md shadow">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
        {/* Sixth Banner */}
      </div>
    </div>
  );
};

export default MidBanner;
