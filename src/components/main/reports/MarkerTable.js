import React, { useState } from "react";

import {
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { tableStyle } from "../../../styles/Styles";
const MarkerTable = () => {
  const styles = tableStyle();
  const [inFives, setInFives] = useState(0);
  const [inTens, setInTens] = useState(0);
  const [inTwenties, setInTwenties] = useState(0);
  const [inFifties, setInFifties] = useState(0);
  const [inHundreds, setInHundreds] = useState(0);
  const [inExcange, setInExchange] = useState(0);
  const [inSum, setInSum] = useState(0);
  const [outFives, setOutFives] = useState(0);
  const [outTens, setOutTens] = useState(0);
  const [outTwenties, setOutTwenties] = useState(0);

  const [outFifties, setOutFifties] = useState(0);
  const [outHundreds, setOutHundreds] = useState(0);
  const [outExcange, setOutExchange] = useState(0);
  const [outSum, setOutSum] = useState(0);

  function createData(
    name,
    five,
    ten,
    twenty,
    fifty,
    oneHundred,
    exchage,
    summary
  ) {
    return { name, five, ten, twenty, fifty, oneHundred, exchage, summary };
  }

  const inRow = [createData("In", 0, 0, 0, 0, 0, 0, 0)];
  const outRow = [createData("Out", 0, 0, 0, 0, 0, 0, 0)];
  const difRow = [createData("Dif", 0, 0, 0, 0, 0, 0, 0)];

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table" className={styles.root}>
          <TableBody displayrowcheckbox="false">
            <TableRow>
              <TableCell>Marks</TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell>20</TableCell>
              <TableCell>50</TableCell>
              <TableCell>100</TableCell>
              <TableCell>Exc</TableCell>
              <TableCell>Sum</TableCell>
            </TableRow>
            {inRow.map((row) => (
              <TableRow key={row.name} inputMode="numeric">
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell inputMode={"numeric"}>
                  <TextField
                    style={{ textAlign: "center" }}
                    name={`${row.five}`}
                    type="number"
                    onChange={(e) => setInFives(e.target.value)}
                    defaultValue={inFives}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.ten}`}
                    type="number"
                    onChange={(e) => setInTens(e.target.value)}
                    defaultValue={inTens}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.twenty}`}
                    type="number"
                    onChange={(e) => setInTwenties(e.target.value)}
                    defaultValue={inTwenties}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.fifty}`}
                    type="number"
                    onChange={(e) => setInFifties(e.target.value)}
                    defaultValue={inFifties}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.oneHundred}`}
                    type="number"
                    onChange={(e) => setInHundreds(e.target.value)}
                    defaultValue={inHundreds}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.exchage}`}
                    type="number"
                    onChange={(e) => setInExchange(e.target.value)}
                    defaultValue={inExcange}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.summary}`}
                    type="number"
                    onChange={(e) => setInSum(e.target.value)}
                    defaultValue={inSum}
                  />
                </TableCell>
              </TableRow>
            ))}
            {outRow.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.five}`}
                    type="number"
                    onChange={(e) => setOutFives(e.target.value)}
                    defaultValue={inFives}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.ten}`}
                    type="number"
                    onChange={(e) => setOutTens(e.target.value)}
                    defaultValue={outTens}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.twenty}`}
                    type="number"
                    onChange={(e) => setOutTwenties(e.target.value)}
                    defaultValue={outTwenties}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.fifty}`}
                    type="number"
                    onChange={(e) => setOutFifties(e.target.value)}
                    defaultValue={outFifties}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.oneHundred}`}
                    type="number"
                    onChange={(e) => setOutHundreds(e.target.value)}
                    defaultValue={outHundreds}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.exchage}`}
                    type="number"
                    onChange={(e) => setOutExchange(e.target.value)}
                    defaultValue={outExcange}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.summary}`}
                    type="number"
                    onChange={(e) => setOutSum(e.target.value)}
                    defaultValue={outSum}
                  />
                </TableCell>
              </TableRow>
            ))}
            {difRow.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.five}`}
                    readOnly
                    type="number"
                    value={outFives - inFives}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.ten}`}
                    type="number"
                    readOnly
                    value={outTens - inTens}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.summary}`}
                    type="number"
                    readOnly
                    value={outTwenties - inTwenties}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.twenty}`}
                    type="number"
                    readOnly
                    value={outFifties - inFifties}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.fifty}`}
                    type="number"
                    readOnly
                    value={outHundreds - inHundreds}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.oneHundred}`}
                    type="number"
                    readOnly
                    value={outExcange - inExcange}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`${row.exchage}`}
                    type="number"
                    readOnly
                    value={outSum - inSum}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MarkerTable;
