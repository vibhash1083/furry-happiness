import React from "react";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Expand from "./Expand.js";

export default class Approval extends React.Component{
  render(){
    return (
      <React.Fragment>
      <GridItem xs={12} sm={12} md={8}>
        <p>{this.props.name}</p>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Expand></Expand>
      </GridItem>
      </React.Fragment>
    );
  }
}
