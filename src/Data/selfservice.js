import ShoppingCartIcon from "../css/images/1.jpeg";
import interswitch_logo from "../css/images/2.jpeg";
import Paystack_Logo from "../css/images/3.jpeg";

export const selfService = {
  title: "Our Partner",
  items: [
    {
      image: ShoppingCartIcon,
      title: "Self Service Request",
      url: `/sales/extended-sales/:id`,
      displayButtons: ["Set Up", "Modify Template"],
    },
    {
      image: interswitch_logo,
      title: "Self Service Estimates",
      // url: "/sales/ecommerce/sent_ads_links",
      displayButtons: ["Set Up", "Modify"],
    },
    {
      image: Paystack_Logo,
      title: "Self Service Sales",
      url: "/sales/ecommerce/active_ads_links",
      displayButtons: ["Set Up", "Modify"],
    },
    {
      image: Paystack_Logo,
      title: "Product & Pricing",
      url: "/sales/ecommerce/active_ads_links",
      displayButtons: ["All", "Ava", "Follow Ups"],
    },
  ],
};
