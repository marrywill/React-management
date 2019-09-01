import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "김태인",
    birthday: "910422",
    gender: "남자",
    job: "취업준비생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "어머니",
    birthday: "670707",
    gender: "여자",
    job: "주부"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "최선우",
    birthday: "910505",
    gender: "남자",
    job: "취업준비생"
  }
];

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(customer => {
              return (
                <Customer
                  key={customer.id}
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  gender={customer.gender}
                  birthday={customer.birthday}
                  job={customer.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
