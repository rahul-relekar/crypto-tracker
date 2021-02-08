import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "transparent",
    color:"white",
    width: "900px",
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

  return (
    <div className="coin-app">

      <div className="rahul-brand">

      </div>
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

      {/* <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>NAME</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>SYMBOL</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>PRICE</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>VOLUME</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>CHANGE</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>MARKET CAP</Paper>
        </Grid>
      </Grid> */}

      {/* API display from gecko */}
      {filteredCoins.map((coin) => {
        return <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image}
        symbol={coin.symbol}
        marketcap={coin.market_cap}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        />;
      })}
    </div>
  );
}

export default App;
