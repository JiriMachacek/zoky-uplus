import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { DateTime } from "luxon";

import { Photo } from "../Photo/Photo";

export const formatStory = text => {
  const shorter = text
    .split(" ")
    .slice(0, 20)
    .join(" ")
    .slice(0, 200);

  return shorter === text ? text : `${shorter}...`;
};

export const formatDate = date => {
  var d = DateTime.fromISO(date)
    .setLocale("cs")
    .toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  return d;
};

export const List = ({ data, dumpRecord, handleSorting, sortBy }) => {
  if (data.lenght === 0) {
    return "no data";
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Obrázek</TableCell>
            <TableCell>Jméno</TableCell>
            <TableCell>Příběh</TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "termInMonths"}
                onClick={() => handleSorting("termInMonths")}
              >
                Délka trvání
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "rating"}
                onClick={() => handleSorting("rating")}
              >
                Rating
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "amount"}
                onClick={() => handleSorting("amount")}
              >
                Požadovaná částka
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "deadline"}
                onClick={() => handleSorting("deadline")}
              >
                Deadline
              </TableSortLabel>
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <Photo photos={row.photos} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{formatStory(row.story)}</TableCell>
              <TableCell>{row.termInMonths}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{formatDate(row.deadline)}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  onClick={() => dumpRecord(index)}
                  size="small"
                  variant="outlined"
                >
                  detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

List.defaultProps = {
  data: []
};
