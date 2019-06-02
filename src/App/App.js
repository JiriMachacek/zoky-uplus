import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Header, List, Record } from "./Components";
import lodashSortBy from "lodash/sortBy";

//const url = "https://api.zonky.cz/loans/marketplace";
const url = "./market.json";
const reloadInterval = 1000 * 60 * 5;

class App extends React.Component {
  state = {
    date: [],
    sortBy: "",
    key: null
  };

  componentDidMount() {
    this.fetchData();
    this.setInterval();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setInterval = () => {
    this.interval = setInterval(this.fetchData, reloadInterval);
  };

  fetchData = () =>
    fetch(url, {
      method: "GET",
      credentials: "omit"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(state => ({ ...state, data }));
      });

  handleSorting = sortBy => {
    const data = lodashSortBy(this.state.data, [sortBy]);

    this.setState({ sortBy, data: [...data] });
  };

  dumpRecord = key => {
    console.log(key);

    this.setState(state => ({ ...state, key }));
  };

  interval = null;

  render() {
    const { data, sortBy, key } = this.state;

    return key !== null && data[key] ? (
      <>
        <Header />
        <Container>
          <Button
            color="secondary"
            onClick={() => this.dumpRecord(null)}
            size="small"
            variant="contained"
          >
            Zpět
          </Button>
          <Record row={data[key]} />
        </Container>
      </>
    ) : (
      <>
        <Header />
        <Container>
          <List
            data={data}
            dumpRecord={this.dumpRecord}
            handleSorting={this.handleSorting}
            sortBy={sortBy}
          />
        </Container>
      </>
    );
  }
}

export default App;
