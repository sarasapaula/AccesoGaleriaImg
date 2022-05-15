import React from "react";
import { Block, GalioProvider } from "galio-framework";
import Home from "./screens/Home.js";

import { argonTheme } from "./constants";


export default props => {
    return (
      <GalioProvider theme={argonTheme}>
        <Block flex>
          <Home />
        </Block>
      </GalioProvider>

    );
}

