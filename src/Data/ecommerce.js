import ShoppingCartIcon from "../css/images/1.jpeg";
import interswitch_logo from "../css/images/2.jpeg";
import Paystack_Logo from "../css/images/3.jpeg";
import remita from "../css/images/4.jpeg";
import ShoppingCart from "../css/images/5.jpeg";

export const SalesData = {
  title: "Our Partner",
  items: [
    {
      image: ShoppingCartIcon,
      title: "Advert Links",
      url: "/sales/ecommerce/advertlinks/Total",
      displayButtons: ["Total", "Sent", "Active", "Create New"],
    },
    {
      image: interswitch_logo,
      title: "Products",
      // url: "/sales/ecommerce/sent_ads_links",
      displayButtons: ["Total", "Available", "Active", "Create New"],
    },
    {
      image: Paystack_Logo,
      title: "Customers",
      url: "/sales/ecommerce/active_ads_links",
      displayButtons: ["Total", "Inactive", "Active", "Create New"],
    },
    {
      image: remita,
      title: "Delivery",
      // url: "/sales/ecommerce/total_ads_links",
      displayButtons: ["Total", "Transit", "Delivered", "Settings"],
    },
    {
      image: ShoppingCart,
      title: "Payments",
      displayButtons: ["Total", "Pending", "Confirmed", "Settings"],
    },
  ],
};

export const ExtendedSalesData = {
  title: "Our Partner",
  items: [
    {
      image: ShoppingCartIcon,
      title: "Request For Price's",
      url: `/sales/extended-sales/:id`,
      displayButtons: ["All RFP", "import Data", "New RFP Data"],
    },
    {
      image: interswitch_logo,
      title: "Estimates",
      // url: "/sales/ecommerce/sent_ads_links",
      displayButtons: ["All Estimates", "New Estimate Data"],
    },
    {
      image: Paystack_Logo,
      title: "Sales Orders",
      url: "/sales/ecommerce/active_ads_links",
      displayButtons: ["All Sales Orders", "New Sales Orders"],
    },
    {
      image: remita,
      title: "Invoice and Payments",
      // url: "/sales/ecommerce/total_ads_links",
      displayButtons: ["All Invoices", "All Receivables", "Customization"],
    },
    {
      image: ShoppingCart,
      title: "Products & Pricing",
      displayButtons: ["All", "Create New", "Configuration"],
    },
  ],
};
