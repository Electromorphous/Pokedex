import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    [theme.breakpoints.up('xs')]: {
      height: 90
    },
    [theme.breakpoints.up('sm')]: {
      height: 60
    }
  },
  appBarClass: {
    backgroundColor: '#de3131',
    [theme.breakpoints.up('xs')]: {
      height: 90
    },
    [theme.breakpoints.up('sm')]: {
      height: 60
    }
  },
  title: {
    flexGrow: 1,
    display: 'block'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '6ch',
      '&:focus': {
        width: '8ch'
      }
    },
    [theme.breakpoints.up('sm')]: {
      width: '8ch',
      '&:focus': {
        width: '10ch'
      }
    },
    [theme.breakpoints.up('md')]: {
      width: '10ch',
      '&:focus': {
        width: '20ch'
      }
    },
    paddingRight: theme.spacing(15)
  }
}))

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarClass}>
        <Toolbar>
          <Grid container>
            {/* left padding */}
            <Grid item xs={2} sm={1} />

            <Grid item xs={10} sm={3}>
              <Typography className={classes.title} variant="h4" noWrap>
                Pokédex
              </Typography>
            </Grid>

            <Grid item xs={2} md={3} />

            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>

            {/* right padding */}
            <Grid item xs={2} sm={1} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
