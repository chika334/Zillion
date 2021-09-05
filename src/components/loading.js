import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, connect } from "react-redux";
import { hideLoader } from "../_action/loading";
// import { hideModal } from '../../_action/modal';
import { withRouter } from "react-router-dom";

const SuspenseLoading = (props) => {
  const loading = useSelector((state) => state.loading.loading);
  const user = useSelector((state) => state.authUser.isAuthenticated);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!loading) return null;
  //   }, 3000);
  // });

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          >
            <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
              <div className="d-flex align-items-center flex-column px-4">
                <PropagateLoader color={"#3c44b1"} loading={true} />
              </div>
              <div className="text-muted font-size-xl text-dark text-center pt-3">
                <span className="font-size-lg d-block text-dark">
                  Your request is loading
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default withRouter(connect(null, { hideLoader })(SuspenseLoading));
