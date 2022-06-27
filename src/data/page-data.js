import Accessories from "../images/Accessories_img.png";
import Mens from "../images/mens_image.png";
import Womens from "../images/womens_img.png";
import headerOne from "../images/hero_1.png";
import headerThree from "../images/hero_3.png";
import headerTwo from "../images/hero_2.png";

export const pageData = {
  announcements: [
    {
      msg: "Free Shipping On All Orders Over $75.00",
    },
  ],
  headers: [
    {
      img: headerOne,
      heroTitle: "Shop New Arrivals",
      heroSub: "Our coolest new items are waiting for you!",
      heroUrl: "https://google.com",
      colorClass: null,
    },
    {
      img: headerTwo,
      heroTitle: "Our Fave Tees",
      heroSub: "Shop all of our favorites.",
      heroUrl: "https://google.com",
      colorClass: "white",
    },
    {
      img: headerThree,
      heroTitle: "Men’s Tees",
      heroSub: "Find the perfect shirt.",
      heroUrl: "https://google.com",
      colorClass: "white",
    },
  ],
  collecions: [
    {
      title: "Women's",
      url: "https://arthursousa.com",
      img: Womens,
    },
    {
      title: "Men's",
      url: "https://arthursousa.com",
      img: Mens,
    },
    {
      title: "Accessories",
      url: "https://arthursousa.com",
      img: Accessories,
    },
  ],
};
