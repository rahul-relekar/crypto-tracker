import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "transparent",
    // color:"white",
    // width: "900px",
  },
  name: {
    fontSize: "16px",
    width: "150px",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    // border-bottom: 1px solid #d7d7d7;
    // width: "1500px",
  },
}));

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=hkd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { field: "id", hide: true },
    { field: "name", headerName: "CRYPTO NAME", width: 200 },
    { field: "symbol", headerName: "SYMBOL", width: 150 },
    { field: "price", headerName: "PRICE", width: 200 },
    { field: "volume", headerName: "VOLUME", width: 200 },
    { field: "price_change", headerName: "PRICE CHANGE", width: 200 },
    { field: "market_limit", headerName: "MARKET CAP", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      name: 1,
      symbol: "Snow",
      price: "Jon",
      volume: 35,
      price_change: 1,
      market_limit: 1,
    },
  ];

  return (
    <div className="coin-app">
      {/* <div style={{ height: 400, width: "80%" }}>
        <DataGrid
          rows={
            filteredCoins.map((coin) => {             
                
                  key:coin.id
                  name:coin.name
                  image:coin.image
                  symbol:coin.symbol
                  marketcap:coin.market_cap
                  price:coin.current_price
                  priceChange:coin.price_change_percentage_24h
                  volume:coin.total_volume               
              ;
            })
          }
          columns={columns}
          pageSize={5}
          checkboxSelection
        />

      </div> */}
      <div className="coin-search">
        {/* Search bar */}
        <h1 className="coin-text"> Search your crypto</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className={classes.box}>
        <Grid container spacing={3}>
          <Grid item xs={1.5}>
            <Paper className={classes.paper}>
              <h1 className={classes.name}>NAME</h1>
            </Paper>
          </Grid>
          <Grid item xs={1.2}>
            <Paper className={classes.paper}>
              <h1 className={classes.name}>SYMBOL</h1>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <h1 className={classes.name}>PRICE</h1>
            </Paper>
          </Grid>
          <Grid item xs={2.5}>
            <Paper className={classes.paper}>
              <h1 className={classes.name}>VOLUME</h1>
            </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>
              <h1 className={classes.name}>CHANGE</h1>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <h1 className={classes.name}>MARKET CAP</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* API display from gecko */}
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
