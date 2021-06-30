import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: 20,
    width: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
