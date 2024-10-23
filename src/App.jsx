import "./App.css";
import productImgDt from "../src/assets/images/image-product-desktop.jpg";
import productImgMb from "../src/assets/images/image-product-mobile.jpg";
import { IoMdCart } from "react-icons/io";
function App() {
  return (
    <>
      <div className="bg-[#F3EAE3] w-screen min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="preview-container flex flex-row height-96 bg-white rounded-xl  w-[700px]">
            <div className="w-6/12">
              <img
                className="relative min-h-autow-full lg:rounded-tl-xl lg:rounded-bl-xl"
                src={productImgDt}
                alt="product-image"
              />
            </div>
            <div className="w-6/12">
              <div className="p-10 flex flex-col gap-7">
                <p className="tracking-extra-widest  font-montserrat font-medium text-gray-400">
                  PERFUME
                </p>
                <h1 className="font-extrabold text-[40px] leading-10 font-fraunces">
                  Gabrielle Essence Eau De Parfum
                </h1>
                <p className="font-montserrat text-gray-400 font-medium">
                  A floral, solar and vuluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="flex items-center gap-12">
                  <p className="font-fraunces font-extrabold text-[#3D8168] text-[30px]">
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
}

export default App;
