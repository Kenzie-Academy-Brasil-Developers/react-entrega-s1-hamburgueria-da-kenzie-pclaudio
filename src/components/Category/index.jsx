import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: 'Roboto Slab',
    fontWeight: 'fontWeightBold',
    fontSize: 40,
    textAlign: 'center',
    color: '#502314',
  },
}));

const Category = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container direction='row' alignItems='center' spacing={ 2 }>
      <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
        <h2 className={ classes.title } >{ children }</h2>
      </Grid>
    </Grid>
  );
};

export default Category;