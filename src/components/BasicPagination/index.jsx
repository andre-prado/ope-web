import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(0),
    },
  },
}));

function BasicPagination() {
  const classes = useStyles();
  return (
    <div className="basic-pagination">
      <div className="pagination-container">
        <div className={classes.root}>
          <Pagination count={10} color="primary" size="large"/>
        </div>
      </div>
    </div>
  );
}

export default BasicPagination;