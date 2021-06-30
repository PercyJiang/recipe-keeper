import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: 20,
    width: 500,
    paddingBottom: 60,
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50ch",
    },
  },
  fileInput: {
    width: "97%",
    margin: "10px 17px",
  },
  typography: {
    marginLeft: 10,
    marginTop: 10,
  },
  button: {
    position: "relative",
    float: "right",
    marginRight: 20,
  },
}));
