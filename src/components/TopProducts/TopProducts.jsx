import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Повседневная одежда",
    description:
      "Комфортная и стильная одежда для ежедневного ношения. Подходит как для работы, так и для отдыха.",
  },
  {
    id: 2,
    img: Img2,
    title: "Футболка с принтом",
    description:
      "Яркая футболка с уникальными принтами, которая подчеркнет вашу индивидуальность.",
  },
  {
    id: 3,
    img: Img3,
    title: "Женская рубашка",
    description:
      "Элегантная женская рубашка из качественных материалов, идеально подходящая для офиса и встреч.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-[#00B4D8]">
            Лучшие товары для вас
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-[#00B4D8]">
            Наши лучшие продукты
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Мы предлагаем широкий выбор качественных товаров, которые подойдут
            для любого случая.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#00B4D8] hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-[#00B4D8] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#00B4D8]"
                  onClick={handleOrderPopup}
                >
                  Заказать сейчас
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
