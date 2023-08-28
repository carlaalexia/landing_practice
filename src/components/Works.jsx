import React, { useState } from "react";
import "../CSS/animations.css";

const Works = () => {
  return (
    <div id="works" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-bold">
          We create world-class digital products
        </h1>
        <p className="text-xl text-gray-500">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      {/**Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="image-container flex flex-col gap-2">
          <img src="../assets/work1.png" className="w-full rounded-3xl mb-4" />
          <p className="text-gray-500">App Design - August 27, 2023</p>
          <h3 className="text-2xl font-bold">App Redisign</h3>
          <p>
            By information about design the world to the best instructors, heact
            helping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="image-container flex flex-col gap-4">
            <img src="../assets/work2.png" className="rounded-2xl" />
            <p className="text-gray-500">App Design - August 27, 2023</p>
            <h3 className="text-xl font-bold">
              Redesign channel website landing page
            </h3>
          </div>
          <div className="image-container flex flex-col gap-4">
            <img src="../assets/work3.png" className="rounded-2xl" />
            <p className="text-gray-500">App Design - August 27, 2023</p>
            <h3 className="text-xl font-bold">
              New Locator App For a New Company
            </h3>
          </div>
          <div className="image-container flex flex-col gap-4">
            <img src="../assets/work4.png" className="rounded-2xl" />
            <p className="text-gray-500">App Design - August 27, 2023</p>
            <h3 className="text-xl font-bold">Rental Rooms Web App Platform</h3>
          </div>
          <div className=" image-container flex flex-col gap-4">
            <img src="../assets/work5.png" className="rounded-2xl" />
            <p className="text-gray-500">App Design - August 27, 2023</p>
            <h3 className="text-xl font-bold">
              Calendar App for Big SASS Company
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
