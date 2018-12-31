import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Contato extends Component {
    
	state = {
    	open: false,
    	nome: '',
    	email: '',
    	empresa: '',
    	mensagem: '',
    	tel: '( )    -     ',
};

 	handleChange = name => event => {
    	this.setState({
      		[name]: event.target.value,
    	});
  	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

    render() {
        return (
            <div id="contato">
            	<Typography component="h2" variant="display3" color="inherit">
		          Entre em contato conosco
		        </Typography>


      	    	<Button size="large" style={{marginBottom: 20, marginLeft:'auto', marginRight:'auto', marginTop: 20}} variant="outlined" color="primary" onClick={this.handleClickOpen}>
            	  Clique para nos contatar
            	</Button>


            	<Dialog
	            	  open={this.state.open}
	            	  TransitionComponent={Transition}
	            	  keepMounted
	            	  onClose={this.handleClose}
	            	  aria-labelledby="alert-dialog-slide-title"
	            	  aria-describedby="alert-dialog-slide-description"
	            	>
	            	  <DialogTitle id="alert-dialog-slide-title">
	            	    {"Por favor preencha os campos"}
	            	  </DialogTitle>
	            	  <DialogContent>
	            	    <DialogContentText id="alert-dialog-slide-description">
	            	      
	            	    	<form noValidate autoComplete="off" style={{display:'flex', flexDirection:'column'}}>
			        			<TextField
									id="standard-name"
									label="Nome"
									value={this.state.nome}
									onChange={this.handleChange('nome')}
									margin="normal"
									/>

									<TextField
									id="standard-email"
									label="Email"
									value={this.state.email}
									onChange={this.handleChange('email')}
									margin="normal"
									/>

									<TextField
									id="tel"
									label="Telefone"
									value={this.state.tel}
									onChange={this.handleChange('tel')}
									margin="normal"
									InputProps={{inputComponent: TextMaskCustom,}}
									/>

									<TextField
									id="empresa"
									label="Empresa"
									value={this.state.empresa}
									onChange={this.handleChange('empresa')}
									margin="normal"
									/>

									<TextField
									multiline
									rowsMax="5"
									id="mensagem"
									label="Mensagem"
									value={this.state.mensagem}
									onChange={this.handleChange('mensagem')}
									margin="normal"
									/>
			    			</form> 

	            	    </DialogContentText>
	            	  </DialogContent>
	            	  <DialogActions>
	            	    <Button onClick={this.handleClose} color="secondary">
	            	      Cancelar
	            	    </Button>
	            	    <Button color="primary">
	            	      Enviar
	            	    </Button>
	            	  </DialogActions>
            	</Dialog>


            </div>
        );
    }
}

export default Contato;