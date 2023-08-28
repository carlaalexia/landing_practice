import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Trusted by greatest companies
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-8">
        <img src="../assets/google2.png" className="w-40" />
        <img src="../assets/amazon.png" className="w-40" />
        <img src="../assets/airbnb.png" className="w-40" />
        <img src="../assets/mercado.png" className="w-40" />
        <img src="../assets/nintendo.png" className="w-40" />
      </div>
    </div>
  );
};

export default Clients;
