import { Container, Grid, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: "200px",
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  addToCart: {
    margin: "20px auto",
  },

  center: {
    textAlign: "center",
  },

  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    margin: "auto",
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState({ _page: 0, _size: 4 });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productApi.getAll(filter);
        console.log(response);
        setProducts(response.products);
        setCount(response.totalPages);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, [filter]);

  const handlePageChange = (event, value) => {
    const newFilter = {
      ...filter,
      _page: value - 1,
    };

    setFilter(newFilter);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {/* <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid> */}

          {products.map((product) => (
            <Grid item xs={3}>
              <Card className={classes.center}>
                <CardMedia
                  className={classes.media}
                  image={product.imageUrl}
                  title="Book"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.title}
                  </Typography>
                </CardContent>

                <div>
                  <Button
                    className={classes.addToCart}
                    variant="contained"
                    color="primary"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container>
          <Grid item xs={12} className={classes.pagination}>
            <Pagination
              count={count}
              color="primary"
              onChange={(event, value) => handlePageChange(event, value)}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
