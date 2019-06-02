import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

export const Header = () => (
  <>
    <CssBaseline />
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Zonky Marketplace</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
);
