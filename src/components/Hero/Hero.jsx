import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Скидки до 50% на мужскую одежду",
    description:
      "Arzon Market предлагает широкий выбор качественной мужской одежды по самым доступным ценам. Покупайте модные и стильные вещи со скидками до 50%. Одевайтесь со вкусом, не переплачивая!",
  },
  {
    id: 2,
    img: Image2,
    title: "Скидка 30% на женскую одежду",
    description:
      "Arzon Market — это лучшее место для покупки женской одежды. Воспользуйтесь скидкой 30% на стильные платья, блузки и аксессуары. Мы предлагаем товары, которые подчеркнут вашу индивидуальность и стиль.",
  },
  {
    id: 3,
    img: Image3,
    title: "Скидки до 70% на все товары",
    description:
      "Arzon Market устраивает грандиозную распродажу! Скидки до 70% на все категории товаров: электроника, одежда, аксессуары и многое другое. Успейте приобрести качественные товары по невероятно низким ценам!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white flex justify-center items-center transition-all duration-200">
      {/* Фон узора */}
      <div className="h-[700px] w-[700px] bg-gradient-to-r from-teal-400 to-blue-500 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>

      {/* Геройская секция */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Текстовый раздел */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-amber-400 to-amber-600 hover:scale-105 transition duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Заказать сейчас
                    </button>
                  </div>
                </div>

                {/* Раздел изображения */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" className="relative z-10">
                    <img
                      src={data.img}
                      alt="Arzon Market Hero"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
