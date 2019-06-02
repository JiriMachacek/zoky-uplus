import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import get from "lodash/get";

export const Record = ({ row }) => {
  if (Object.keys(row).lenght === 0) {
    return "no data";
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(row).map(key => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>
                <span>{row[key] !== null ? row[key].toString() : ""}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

Record.defaultProps = {
  row: {}
};
