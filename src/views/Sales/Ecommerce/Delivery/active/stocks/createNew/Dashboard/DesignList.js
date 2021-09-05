import React, { Component } from 'react';
import styled from 'styled-components';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const DesignList = (props) => {
  const match = useRouteMatch();

  return (
    <div>
      <p><Link to={`${match.url}/new`}>New Design</Link></p>
    </div>
  );
};

export default DesignList;
