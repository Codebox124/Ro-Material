import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { threatLevelColorTable } from "../utils/Wetbulb.tsx";

interface Props {
  level: number;
}

export default function ThreatLevelIndicator({ level }: Props) {
  const threatLevel = () => {
    if (level === undefined) return 0;
    return level;
  };
  const borderWidth = 6;
  const getBorderWidth = (current: number) => {
    return threatLevel() == current ? borderWidth : 0;
  };
  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 35, minHeight: 35 }}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            <TableRow
              key="name"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="right"
                style={{
                  background: threatLevelColorTable[0],
                  borderColor: "lightgray",
                  borderWidth: getBorderWidth(0),
                }}
              />
              <TableCell
                align="right"
                style={{
                  background: threatLevelColorTable[1],
                  borderColor: "lightgray",
                  borderWidth: getBorderWidth(1),
                }}
              />
              <TableCell
                align="right"
                style={{
                  background: threatLevelColorTable[2],
                  borderColor: "lightgray",
                  borderWidth: getBorderWidth(2),
                }}
              />
              <TableCell
                align="right"
                style={{
                  background: threatLevelColorTable[3],
                  borderColor: "lightgray",
                  borderWidth: getBorderWidth(3),
                }}
              />
              <TableCell
                align="right"
                style={{
                  background: threatLevelColorTable[4],
                  borderColor: "lightgray",
                  borderWidth: getBorderWidth(4),
                }}
              />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
