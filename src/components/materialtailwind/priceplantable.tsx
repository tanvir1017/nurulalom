import { TABLE_HEAD_MERGED, TABLE_ROWS } from "@/data/tabledata";
import { TableData as TableDataType } from "@/types/globaltypes";
import { Button, Card, Typography } from "@material-tailwind/react";
import DeliverablesRow from "../pages/price/deliverablesrow";
import ExecutionRow from "../pages/price/executionrow";

export function PricePlanTable({ companySize }: { companySize: string }) {
  return (
    <Card className="h-full w-full mb-20">
      <table className="w-full min-w-max table-auto text-left">
        <thead className="bg-gradient-to-r from-blue-400 to-blue-600">
          {TABLE_HEAD_MERGED.filter((h) => h.company === companySize).map(
            (trdata: TableDataType, i: number) => {
              const tableHead = [
                trdata.firstColumn,
                trdata.secondColumn,
                trdata.thirdColumn,
                trdata.fourthColumn,
                trdata.fifthColumn,
              ];
              return (
                <tr key={i}>
                  {tableHead.map((head, i) => {
                    const applyVariant = [
                      "Plan",
                      "Weekly Time",
                      "Monthly Hours",
                    ];
                    const applyFontThickness = [
                      "Plan",
                      "Weekly Time",
                      "Monthly Hours",
                    ];
                    const applyTestSze = ["-", "4", "8", "20", "40"];
                    return (
                      <th
                        key={i}
                        className={`border-b border-blue-600 px-4 py-7 ${
                          applyFontThickness.includes(head)
                            ? "text-left"
                            : "text-center"
                        }`}
                      >
                        <Typography
                          variant={`${
                            applyVariant.includes(head) ? "h4" : "h5"
                          }`}
                          className={`${
                            applyFontThickness.includes(head)
                              ? "font-black"
                              : "font-medium"
                          } ${
                            applyTestSze.includes(head)
                              ? "text-5xl font-black"
                              : ""
                          } uppercase  text-white `}
                        >
                          {head}
                        </Typography>
                      </th>
                    );
                  })}
                </tr>
              );
            }
          )}
        </thead>
        <tbody>
          {TABLE_ROWS.filter((item) => item.company === companySize).map(
            (
              {
                firstColumn,
                secondColumn,
                thirdColumn,
                fourthColumn,
                fifthColumn,
              }: TableDataType,
              index
            ) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={`${classes} text-xl`}>{firstColumn}</td>
                  <td
                    className={`${classes} text-[#48D300] font-bold text-2xl text-center`}
                  >
                    {secondColumn}
                  </td>
                  <td
                    className={`${classes} text-[#48D300] font-bold text-2xl text-center`}
                  >
                    {thirdColumn}
                  </td>
                  <td
                    className={`${classes} text-[#48D300] font-bold text-2xl text-center`}
                  >
                    {fourthColumn}
                  </td>
                  <td
                    className={`${classes} text-[#48D300] font-bold text-2xl text-center`}
                  >
                    {fifthColumn}
                  </td>
                </tr>
              );
            }
          )}
          {/* check details row */}
          <tr>
            <td className="p-4 border-b border-blue-gray-50 text-xl">
              Check Details
            </td>
            <td className="text-center">
              <Button className="rounded-full">Explore</Button>
            </td>
            <td className="text-center">
              <Button className="rounded-full">Explore</Button>
            </td>{" "}
            <td className="text-center">
              <Button className="rounded-full">Explore</Button>
            </td>{" "}
            <td className="text-center">
              <Button className="rounded-full">Explore</Button>
            </td>{" "}
          </tr>

          <DeliverablesRow companySize={companySize} />

          <ExecutionRow companySize={companySize} />
          <tr>
            <td className="p-4 border-b border-blue-gray-50 text-xl"></td>
            <td className="text-center">
              <Button className="rounded-full">Explore</Button>
            </td>
            <td className="p-4 text-center">
              <Button className="rounded-full">Explore</Button>
            </td>{" "}
            <td className="p-4 text-center">
              <Button className="rounded-full">Explore</Button>
            </td>{" "}
            <td className="p-4 text-center">
              <Button className="rounded-full">Explore</Button>
            </td>{" "}
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
