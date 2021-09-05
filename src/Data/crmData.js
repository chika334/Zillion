import ShoppingCartIcon from "../css/images/1.jpeg";
import interswitch_logo from "../css/images/2.jpeg";
import Paystack_Logo from "../css/images/3.jpeg";

export const CRMData = {
  title: "Our Partner",
  items: [
    {
      image: ShoppingCartIcon,
      title: "Prospecting",
      url: `/sales/extended-sales/:id`,
      displayButtons: ["Contacts", "Lead Generation", "Qualifying Leads"],
    },
    {
      image: interswitch_logo,
      title: "Proposal/Quotation",
      // url: "/sales/ecommerce/sent_ads_links",
      displayButtons: ["Contacting", "Quotations", "Trial/Sample"],
    },
    {
      image: Paystack_Logo,
      title: "Closing/Negotation",
      url: "/sales/ecommerce/active_ads_links",
      displayButtons: ["Sales Orders", "Incentives", "Follow Ups"],
    },
  ],
};
