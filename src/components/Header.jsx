import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      height: 60,
    },
  },
  appBarClass: {
    backgroundColor: "rgb(236, 49, 49);",
    [theme.breakpoints.up("sm")]: {
      height: 60,
    },
  },
  title: {
    flexGrow: 1,
    display: "block",
    width: "max-content",

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "6ch",
      "&:focus": {
        width: "8ch",
      },
    },
    [theme.breakpoints.up("sm")]: {
      width: "8ch",
      "&:focus": {
        width: "10ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
    paddingRight: theme.spacing(15),
  },
}));

export default function SearchAppBar({
  inputText,
  setInputText,
  showSearchBar,
}) {
  const history = useHistory();
  const classes = useStyles();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarClass}>
        <Toolbar>
          <Grid container>
            {/* left padding */}
            <Grid item xs={2} sm={1} />

            <Grid item xs={10} sm={3}>
              <Typography
                onClick={() => {
                  history.push("/");
                }}
                className={classes.title}
                variant="h4"
                noWrap
              >
                Pokédex
              </Typography>
            </Grid>

            <Grid item xs={2} md={3} />

            <Grid item>
              {showSearchBar ? (
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    value={inputText}
                    onChange={inputTextHandler}
                    placeholder="Search"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              ) : (
                <> </>
              )}
            </Grid>

            {/* right padding */}
            <Grid item xs={2} sm={1} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
