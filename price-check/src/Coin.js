import React from "react";
import "./Coin.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: "transparent",
        color:"white"
      },
}));

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  const classes = useStyles();
  return (
    <div className="coin-container">
      {/* <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{name}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{symbol}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{price}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{volume.toLocaleString()}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>CHANGE</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>HKD {marketcap.toLocaleString()}</Paper>
        </Grid>
      </Grid> */}

      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">HKD {price}</p>
          <p className="coin-volume">HKD {volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">HKD {marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
