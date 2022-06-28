import Accessories from "../images/Accessories_img.png";
import HeaderOne from "../images/hero_1.png";
import HeaderThree from "../images/hero_3.png";
import HeaderTwo from "../images/hero_2.png";
import MailIcon from "../images/mail.svg";
import Mens from "../images/mens_image.png";
import OurFavsTee from "../images/fave_tees.png";
import Product from "../images/product.png";
import Womens from "../images/womens_img.png";

export const pageData = {
  announcements: [
    {
      msg: "Free Shipping On All Orders Over $75.00",
    },
  ],
  headers: [
    {
      img: HeaderOne,
      heroTitle: "Shop New Arrivals",
      heroSub: "Our coolest new items are waiting for you!",
      heroUrl: "https://google.com",
      colorClass: null,
    },
    {
      img: HeaderTwo,
      heroTitle: "Our Fave Tees",
      heroSub: "Shop all of our favorites.",
      heroUrl: "https://google.com",
      colorClass: "white",
    },
    {
      img: HeaderThree,
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
  products: [
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
    {
      tag: "women's t-shirt",
      title: "Product Title",
      price: "19.99",
      img: Product,
    },
  ],
  favorite: {
    title: "Our Favorite Tees",
    sub: "Everyday tees you need",
    url: "https://canvasskateboards.ca",
    img: OurFavsTee,
  },
  newsletter: {
    header: "Sign Up & Stay Connected",
    sub: "Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!",
    icon: MailIcon,
  },
};
