import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import DirectorsTable from '../DirectorsTable/DirectorsTable';
import DirectorsForm from '../DirectorsForm/DirectorsForm';

import withHocs from './DirectorsHoc.js';

class Directors extends React.Component {
  state = {
    open: false,
    name: '',
    age: 0,
    id: '',
  }

  handleClickOpen = (data: any) => {
    this.setState({
      open: true,
      ...data,
    });
  };

  handleClose = () => { this.setState({ name: '', age: 0, id: null, open: false }); };

  handleChange = (name: string) => ({ target }: any) => { this.setState({ [name]: target.value }); };

  render() {
    const { name, age, id, open } = this.state;
    const { classes }: any = this.props;

    return (
      <>
        <DirectorsForm handleChange={this.handleChange} selectedValue={{ name, age, id }} open={open} onClose={this.handleClose} />
        <div className={classes.wrapper}>
          <DirectorsTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
          <Fab onClick={() => this.handleClickOpen(null)} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
      </>
    );
  }
};

export default withHocs(Directors);
