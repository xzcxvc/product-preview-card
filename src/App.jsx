import React from "react";

import "./App.css";
import productImgDt from "../src/assets/images/image-product-desktop.jpg";
import productImgMb from "../src/assets/images/image-product-mobile.jpg";
import { IoMdCart } from "react-icons/io";

const ProductImage = () => {
  return (
    <>
      <img
        className="relative rounded-tl-xl rounded-bl-xl sm:hidden md:hidden xs:hidden 2xs:hidden lg:block"
        src={productImgDt}
        alt="product-image"
      />
      <img
        className="relative lg:hidden md:block sm:block rounded-tl-xl rounded-tr-xl 2xs:block "
        src={productImgMb}
        alt="product-image"
      />
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="bg-[#F3EAE3] w-screen min-h-screen">
        <div className="flex items-center justify-center min-h-screen md:py-10 sm:py-10 xs:py-10 2xs:px-10 ">
          <div className="preview-container xs:mx-20 flex xs:flex-col sm:flex-col md:flex-col lg:flex-row bg-white rounded-xl lg:w-[700px] md:w-[400px] sm:w-[400px]">
            <div className="lg:w-6/12">
              <ProductImage />
            </div>
            <div className="lg:w-6/12">
              <div className="p-10 flex flex-col lg:gap-8 2xs:gap-3">
                <p className="tracking-extra-widest font-montserrat font-medium text-gray-400">
                  PERFUME
                </p>
                <h1 className="font-extrabold lg:text-[40px] md:text-[32px] sm:text-[32px] xs:text-[28px] 2xs:text-[22px] sm:leading-10 md:leading-10 lg:leading-10 2xs:leading-7 font-fraunces">
                  Gabrielle Essence Eau De Parfum
                </h1>
                <p className="font-montserrat text-gray-400 font-medium 2xs:text-[14px]">
                  A floral, solar and vuluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="flex items-center gap-12">
                  <p className="font-fraunces font-extrabold text-[#3D8168] text-[30px] 2xs:text-[22px]">
                    $149.99
                  </p>
                  <p className="font-montserrat font-medium line-through text-gray-400 text-[14px]">
                    $149.99
                  </p>
                </div>
                <button className="bg-[#3D8168] flex items-center justify-center gap-3 w-full p-2 rounded-lg text-white font-montserrat font-semibold">
                  <IoMdCart size={18} />
                  <p>Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
