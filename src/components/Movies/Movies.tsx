import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MoviesTable from '../MoviesTable/MoviesTable';
import MoviesForm from '../MoviesForm/MoviesForm';

import withHocs from './MoviesHoc.js';

interface Movies {
  classes: any;
}

class Movies extends React.Component<Movies> {
  state = {
    id: 0,
    open: false,
    name: '',
    genre: '',
    watched: false,
    rate: 0,
    directorId: '',
  }

  handleClickOpen = (data = {} as any) => {
    this.setState({
      open: true,
      ...data,
      directorId: data.director ? data.director.id : '',
    });
  };

  handleClose = () => {
    this.setState({
      name: '',
      genre: '',
      watched: false,
      rate: 0,
      directorId: '',
      open: false
    });
  };

  handleSelectChange = ({ target }: any) => { this.setState({ [target.name]: target.value }); };
  handleCheckboxChange = (name: string) => ({ target }: any) => { this.setState({ [name]: target.checked }); };
  handleChange = (name: string) => ({ target }: any) => { this.setState({ [name]: target.value }); };

  render() {
    const { id, name, genre, watched, rate, directorId, open } = this.state;
    const { classes } = this.props;

    return (
      <>
        <MoviesForm handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} handleCheckboxChange={this.handleCheckboxChange} selectedValue={{ id, name, genre, watched, rate, directorId }} open={open} onClose={this.handleClose} />
        <div className={classes.wrapper}>
          <MoviesTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
          <Fab onClick={() => this.handleClickOpen()} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
      </>
    );
  }
};

export default withHocs(Movies)
