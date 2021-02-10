import React from "react";
import "./Coin.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "transparent",
    color: "white",
    // backgroundColor: "white",
    height: "80px",
  },
  paperImg:{
    display: "flex",
    alignItems: "center",
    paddingRight: "24px",
    minWidth: "300px",
    height: "80px",
    backgroundColor: "transparent"
  },
  image: {
    height: "30px",
    width: "30px",
    marginRight: "10px",
  },
  name: {
    fontSize: "16px",
    width: "150px",
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
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <Paper className={classes.paperImg}>
            <img className={classes.image} src={image} alt="crypto" />
            <h1 className={classes.name}>{name}</h1>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <p className="coin-symbol">{symbol}</p>
          </Paper>
        </Grid>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <p className="coin-price">HKD {price}</p>
          </Paper>
        </Grid>
        <Grid item xs={2.2}>
          <Paper className={classes.paper}>
            <p className="coin-volume">HKD {volume.toLocaleString()}</p>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <p className="coin-marketcap">Mkt Cap: HKD {marketcap.toLocaleString()}</p>
          </Paper>
        </Grid>
      </Grid>

      {/* <div className="coin-row">
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
      </div> */}
    </div>
  );
};

export default Coin;
