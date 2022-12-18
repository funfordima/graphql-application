import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';

import withHocs from './DirectorsFormHoc.js';

interface SelectedValueModel {
  id: string;
  name: string;
  age: number;
}

interface DirectorsFormProps {
  id: string;
  selectedValue: SelectedValueModel;
  onClose: () => void;
  handleChange: (name: string) => undefined;
  open: boolean;
  classes: any;
  addDirector: any;
  updateDirector: any;
}

class DirectorsForm extends React.Component<DirectorsFormProps> {
  handleClose = () => { this.props.onClose(); };

  handleSave = () => {
    const { selectedValue, onClose, addDirector, updateDirector } = this.props;
    const { id, name, age } = selectedValue;
    id ? updateDirector({ name, age: Number(age), id }) : addDirector({ name, age: Number(age) });
    onClose();
  };

  render() {
    const { classes, open, handleChange, selectedValue = {} as SelectedValueModel } = this.props;
    const { name, age } = selectedValue;

    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Director information</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-rate"
            label="Age"
            className={classes.textField}
            value={age}
            onChange={handleChange('age')}
            type="number"
            margin="normal"
            variant="outlined"
          />
          <div className={classes.wrapper}>
            <Button onClick={this.handleSave} variant="contained" color="primary" className={classes.button}>
              <SaveIcon /> Save
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
};

export default withHocs(DirectorsForm);
