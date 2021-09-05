import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  withRouter,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// import { ClimbingBoxLoader } from "react-spinners";
import { connect, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import SuspenseLoading from "./components/loading";
import MuiTheme from "./theme";

// Example Pages
import Login from "./views/Login";
import Sales from "./views/Sales";
import Ecommerce from "./views/Sales/Ecommerce";
import EcoAdvertTotal from "./views/Sales/Ecommerce/advert";
import Products from "./views/Sales/Ecommerce/Products";
import Register from "./views/Register";
import { showLoader, hideLoader } from "./_action/loading";
import ActiveProducts from "./views/Sales/Ecommerce/advert/active/ActiveProducts";
// const Overview = lazy(() => import("./example-pages/Overview"));
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Report from "./views/Report";

// ecommerce
import Sent from "./views/Sales/Ecommerce/advert/active/sent";
import ProductsSent from "./views/Sales/Ecommerce/Products/active/stocks";
import DeliveryTotal from "./views/Sales/Ecommerce/Delivery";
import DeliveryTransit from "./views/Sales/Ecommerce/Delivery/active/ActiveProducts";
import Delivered from "./views/Sales/Ecommerce/Delivery/active/sent";
import Settings from "./views/Sales/Ecommerce/Delivery/active/inactive";
import Inactive from "./views/Sales/Ecommerce/advert/active/inactive";
import ProductsInactive from "./views/Sales/Ecommerce/Products/active/inactive";
// import CreateNew from "./views/Sales/Ecommerce/advert/createNew";
import CreateNew from "./views/Sales/Ecommerce/advert/create";
import Company from "./views/Sales/Ecommerce/advert/createNew/Dashboard/Company";
import Display from "./views/Sales/Ecommerce/advert/create/display";
import listTemplate from "./views/Sales/Ecommerce/advert/create/listTemplate";
import CongratsOnPayments from "./views/Sales/Ecommerce/advert/create/CongratsOnPayment";
import ProductsActive from "./views/Sales/Ecommerce/Products/active/ActiveProducts";
import ActiveStocks from "./views/Sales/Ecommerce/Products/active/stocks/active/ActiveProducts";
import LowStockProducts from "./views/Sales/Ecommerce/Products/active/stocks/active/inactive";
import StockOutProduct from "./views/Sales/Ecommerce/Products/active/stocks/active/sent";
import ProductsandPrising from "./views/Sales/Ecommerce/ProductsandPrising";
import InActiveCustomers from "./views/Sales/Ecommerce/InActiveCustomers";
import ActiveCusomers from "./views/Sales/Ecommerce/ActiveCustomers";
import TotalCustomer from "./views/Sales/Ecommerce/AllCustomers";

// pos
import Pos from "./views/Pos";
import SalesOrder from "./views/Pos/salesOrder/index";
import AllProducts from "./views/Pos/products";
import Available from "./views/Pos/products/active/Available";
import LowStock from "./views/Pos/products/active/LowStock";
import Services from "./views/Pos/products/active/services";
import StockOut from "./views/Pos/products/active/stockOut";
import PosCreateNew from "./views/Pos/createNew";
import AllInvoice from "./views/Pos/salesOrder/AllInvoices";
import PaymentMethod from "./views/Pos/salesOrder/paymentMethod";
import CardPaymwent from "./views/Pos/salesOrder/CardPaymwent";
import CashPaymwent from "./views/Pos/salesOrder/CashPaymwent";
import Ticketting from "./views/Pos/salesOrder/Ticketting";

// extended sales
import ExtendedSales from "./views/ExtendedSales";
import ExtendedSalesID from "./views/ExtendedSales/exDetails/index";
import NewRequestPrice from "./views/ExtendedSales/exDetails/newPriceDetails/NewRequestPrice";
import CustomerInfo from "./views/ExtendedSales/exDetails/newPriceDetails/customerInfo";
import NewEstimates from "./views/ExtendedSales/exDetails/NewEstimates";
import SalesOrders from "./views/ExtendedSales/exDetails/allSalesOrder";
import NewSalesOrders from "./views/ExtendedSales/exDetails/newSalesOrder";
// import AllInvoice from "./views/ExtendedSales/exDetails/allInvoice";
import AllPayments from "./views/ExtendedSales/exDetails/allPayments";
import Ecoinvoice from "./views/Sales/Ecommerce/advert/create/Ecoinvoice";
import DeliveryMethod from "./views/Sales/Ecommerce/advert/create/DeliveryMethod";
import EcommercePaymentMethod from "./views/Sales/Ecommerce/advert/create/EcommercePaymentMethod";

// crm
import CRM from "./views/CRM";
import CRMCreateNew from "./views/CRM/createNew";

// company
import CompanyNavbar from "./views/Company/navbar";
import companyAbout from "./views/Company/about";

const defaultContainer = () => (
  <>
    <Suspense fallback={<div />}>
      <Switch>
        <div>
          <Navbar />
          <Switch>
            <Redirect exact from="/react/realdeal" to="/" />
          </Switch>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/sales/ecommerce" component={Ecommerce} />
            {/* ecommerce advert */}
            <Route
              exact
              path="/sales/ecommerce/advertlinks/Total"
              component={EcoAdvertTotal}
            />
            <Route
              exact
              path="/sales/ecommerce/advertlinks/Sent"
              component={Sent}
            />
            <Route
              exact
              path="/sales/ecommerce/advertlinks/Inactive"
              component={Inactive}
            />
            <Route
              exact
              path="/sales/ecommerce/advertlinks/active"
              component={ActiveProducts}
            />
            {/* ecommerce products */}
            <Route
              exact
              path="/sales/ecommerce/products/Total"
              component={Products}
            />
            <Route
              exact
              path="/sales/ecommerce/products/active"
              component={ProductsActive}
            />
            <Route
              exact
              path="/sales/ecommerce/products/Inactive"
              component={ProductsInactive}
            />
            <Route
              exact
              path="/sales/ecommerce/products/createNew/productsAndPricing"
              component={ProductsandPrising}
            />
            <Route
              exact
              path="/sales/ecommerce/products/createNew/customers/inactive"
              component={InActiveCustomers}
            />
            <Route
              exact
              path="/sales/ecommerce/products/createNew/customers/active"
              component={ActiveCusomers}
            />
            <Route
              exact
              path="/sales/ecommerce/products/createNew/customers/total"
              component={TotalCustomer}
            />
            {/* end of ecommerce products */}
            {/* start stock level */}
            <Route
              exact
              path="/sales/ecommerce/products/stock-level/total"
              component={ProductsSent}
            />
            <Route
              exact
              path="/sales/ecommerce/products/stock-level/available"
              component={ActiveStocks}
            />
            <Route
              exact
              path="/sales/ecommerce/products/stock-level/low-stock"
              component={LowStockProducts}
            />
            <Route
              exact
              path="/sales/ecommerce/products/stock-level/stock-out"
              component={StockOutProduct}
            />
            {/* end stock level */}
            {/* delivery starts */}
            <Route
              exact
              path="/sales/ecommerce/delivery/order/total"
              component={DeliveryTotal}
            />
            <Route
              exact
              path="/sales/ecommerce/delivery/order/transit"
              component={DeliveryTransit}
            />
            <Route
              exact
              path="/sales/ecommerce/delivery/order/delivered"
              component={Delivered}
            />
            <Route
              exact
              path="/sales/ecommerce/delivery/order/settings"
              component={Settings}
            />
            {/* delivery ends */}
            <Route
              exact
              path="/sales/ecommerce/createnew"
              component={CreateNew}
            />
            <Route
              exact
              path="/sales/ecommerce/list-template"
              component={listTemplate}
            />
            <Route
              exact
              path="/ecommerce/payment-invoice/pay"
              component={Ecoinvoice}
            />
            <Route
              exact
              path="/ecommerce/payment/delivery-method"
              component={DeliveryMethod}
            />
            <Route
              exact
              path="/ecommerce/payment/payment-method"
              component={EcommercePaymentMethod}
            />
            <Route
              exact
              path="/ecommerce/payment/payment-success"
              component={CongratsOnPayments}
            />
            {/* pos */}
            <Route exact path="/sales/pos" component={Pos} />
            <Route exact path="/pos/sales-order" component={SalesOrder} />
            <Route exact path="/pos/all-products" component={AllProducts} />
            <Route exact path="/pos/available" component={Available} />
            <Route
              exact
              path="/pos/create-new/product-config"
              component={PosCreateNew}
            />
            <Route exact path="/pos/ticketting" component={Ticketting} />
            <Route exact path="/pos/low-stock" component={LowStock} />
            <Route exact path="/pos/stock-out" component={StockOut} />
            <Route exact path="/pos/services" component={Services} />
            <Route exact path="/pos/invoice" component={AllInvoice} />
            <Route exact path="/pos/payment-method" component={PaymentMethod} />
            <Route exact path="/pos/payment/card" component={CardPaymwent} />
            <Route exact path="/pos/payment/cash" component={CashPaymwent} />
            {/* extended sales */}
            <Route exact path="/extended-sales" component={ExtendedSales} />
            <Route
              exact
              path="/sales/extended-sales/all-rfp"
              component={ExtendedSalesID}
            />
            <Route
              exact
              path="/extended-sales/all-RFP/new-request-price"
              component={NewRequestPrice}
            />
            <Route
              exact
              path="/sales/extended-sales/customer-Info"
              component={CustomerInfo}
            />
            <Route
              exact
              path="/sales/extended-sales/new-estimates"
              component={NewEstimates}
            />
            {/* CRM */}
            <Route exact path="/sales/crm" component={CRM} />
            <Route
              exact
              path="/crm/qaulifying-leads"
              component={CRMCreateNew}
            />

            {/*<Route
              exact
              path="/sales/extended-sales/:id"
              component={ExtendedSalesID}
            />
            <Route
              exact
              path="/sales/extended-sales/:id"
              component={ExtendedSalesID}
            />
            <Route
              exact
              path="/sales/extended-sales/:id"
              component={ExtendedSalesID}
            />
            <Route
              exact
              path="/sales/extended-sales/:id"
              component={ExtendedSalesID}
            /> */}
          </Switch>
        </div>
      </Switch>
    </Suspense>
  </>
);

const otherRoute = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/companyName" />} />
    <Route exact path="/companyName" component={Display} />
  </Switch>
);

const otherNavRoute = () => (
  <>
    <CompanyNavbar />
    <Switch>
      {/* <Route exact path="/" render={() => <Redirect to="/companyName" />} />
    <Route exact path="/companyName" component={Display} /> */}
      <Route exact path="/" render={<Redirect to="/companyName/about" />} />
      <Route exact path="/companyName/about" component={companyAbout} />
    </Switch>
  </>
);

const Routes = (props) => {
  const location = useLocation();
  // const match = useRouteMatch();
  const loading = useSelector((state) => state.loading.loading);
  const user = useSelector((state) => state.authUser);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.3,
  };

  useEffect(() => {
    props.showLoader();
    setTimeout(() => {
      props.hideLoader();
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   // const params = queryString.parse(location.search);
  //   let transId = params.get("hex");

  //   console.log(transId);
  // }, []);

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        {loading ? (
          <SuspenseLoading />
        ) : (
          <Switch>
            <Route exact path="/(companyName)" component={otherRoute} />
            <Route exact path="/companyName/about" component={otherNavRoute} />
            <Route component={defaultContainer} />
          </Switch>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default withRouter(connect(null, { showLoader, hideLoader })(Routes));
