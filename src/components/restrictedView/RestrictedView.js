import React from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { TextField } from "material-ui";

export const RestrictedView = props => {
  return (
    <MuiThemeProvider>
      <div>
          <TextField>
              <h3>Restricted permission</h3>
              <p>Please Login to access this view</p>
          </TextField>
      </div>
    </MuiThemeProvider>
  );
}
