import ShoppingCartIcon from "../css/images/1.jpeg";
import interswitch_logo from "../css/images/2.jpeg";
import Paystack_Logo from "../css/images/3.jpeg";
import remita from "../css/images/4.jpeg";
import ShoppingCart from "../css/images/5.jpeg";
import interswitch from "../css/images/6.jpeg";
import Paystack from "../css/images/7.jpeg";

export const info = {
  title: "Our Partner",
  items: [
    {
      text:
        "Set the parameters for your customers to take charge of their process.",
      text2: "Automated for instant delivery",
    },
    {
      text:
        "Create your estimate either from scratch or from the RFP you have captured somewhere!",
      text2: "Twice the effectiveness",
    },
    {
      text:
        "View, Modify and Add new products to improve your customer experience",
      text2: "This has never been better",
      // url: "/sales/pos",
    },
  ],
};

export const posData = {
  title: "Our Partner",
  items: [
    {
      image: ShoppingCartIcon,
      title: "New Order",
      displayButtons: ["New Order", "All Orders"],
      // url: "/sales/ecommerce",
    },
    {
      image: interswitch_logo,
      title: "Products",
      displayButtons: ["All", "Available", "import Data", "Create New"],
    },
    {
      image: Paystack_Logo,
      title: "Payment & Settings",
      displayButtons: ["invoices", "New Payment"],
      // url: "/sales/pos",
    },
  ],
};
