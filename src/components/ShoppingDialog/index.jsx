import { makeStyles, withStyles, Dialog, DialogContent as MuiDialogContent, DialogTitle as MuiDialogTitle, IconButton, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const customStyle = makeStyles((theme) => ({
  secondaryMessage: {
    display: 'block',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#502314',
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const ShoppingDialog = ({ openDialog, handleClickClose, orderNumber }) => {
  const classes = customStyle();

  return (
    <Dialog onClose={ handleClickClose } aria-labelledby="customized-dialog-title" open={ openDialog }>
      <DialogTitle id="customized-dialog-title" onClose={ handleClickClose }>
        Pedido finalizado
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Seu pedido de número <strong>{ orderNumber }</strong> já está sendo preparado e o vamos lhe entregar o mais rápido possível.
          <span className={ classes.secondaryMessage }>Obrigado pela preferência!</span>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingDialog;