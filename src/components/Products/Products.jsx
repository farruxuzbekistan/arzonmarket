import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Этническая одежда для женщин",
    rating: 5.0,
    color: "Белый",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Западный стиль",
    rating: 4.5,
    color: "Красный",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Очки",
    rating: 4.7,
    color: "Коричневый",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Футболка с принтом",
    rating: 4.4,
    color: "Желтый",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Модная футболка",
    rating: 4.5,
    color: "Розовый",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-[#00B4D8]">
            Лучшие продаваемые товары
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-[#00B4D8]">
            Наши продукты
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Мы предлагаем широкий ассортимент товаров, включая женскую одежду,
            аксессуары и многое другое.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-[#333333]">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#FFC107]" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-5 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Посмотреть все товары
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
