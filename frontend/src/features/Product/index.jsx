import { Grid, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
}));

function ProductFeature(props) {
  const classes = useStyles();

  const match = useRouteMatch();

  return (
    <div>
      <Box>
        <Grid container>
          <Grid item xs={12} className={classes.title}>
            <h1>Sản phẩm</h1>
          </Grid>
        </Grid>
      </Box>
      <Switch>
        <Route path={match.url} exact component={ListPage}></Route>
      </Switch>
    </div>
  );
}

export default ProductFeature;
