import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Главная",
    link: "/#",
  },
  {
    id: 2,
    name: "Лучшие товары",
    link: "/#services",
  },
  {
    id: 3,
    name: "Детская одежда",
    link: "/#",
  },
  {
    id: 4,
    name: "Мужская одежда",
    link: "/#",
  },
  {
    id: 5,
    name: "Электроника",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Трендовые товары",
    link: "/#",
  },
  {
    id: 2,
    name: "Бестселлеры",
    link: "/#",
  },
  {
    id: 3,
    name: "Лучшие рейтинги",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Верхняя секция навигации */}
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-700 py-1">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img width={160} src={Logo} alt="Логотип" />
            </a>
          </div>

          {/* Поисковая строка */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Поиск"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Кнопка заказа */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Заказать
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Переключатель ночного режима */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя секция навигации */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2 shadow-sm">
        <div className="container flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Простой выпадающий список */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Трендовые товары
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
