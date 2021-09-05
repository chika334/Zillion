import React, { Component } from "react";
import styled from "styled-components";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import DesignList from "./DesignList";
import DesignEdit from "./DesignEdit";

const Dashboard = (props) => {
  const match = useRouteMatch();

  return (
    <>
      <DesignEdit />
    </>
  );
};

export default Dashboard;
