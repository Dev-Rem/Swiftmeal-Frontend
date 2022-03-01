import "./assets/scss/main.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Grid container fluid>
      <Grid item xs={3}>
        <Paper style={{ height: 100, margin: 10 }}>
          <SideBar />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper style={{ height: 100, margin: 10 }}>Title</Paper>
        <Grid item xs={9}>
          <Paper style={{ height: 100, margin: 10 }}>Main Content</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
