import { TABLE_HEAD_MERGED } from "@/data/tabledata";
import { TableHeadType } from "@/types/globaltypes";
import { Card, Typography } from "@material-tailwind/react";

export const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function PricePlanTable({ companySize }: { companySize: string }) {
  return (
    <Card className="h-full w-full mb-20">
      <table className="w-full min-w-max table-auto text-left">
        <thead className="bg-gradient-to-r from-blue-400 to-blue-600">
          {TABLE_HEAD_MERGED.filter((h) => h.company === companySize).map(
            (trdata: TableHeadType, i: number) => {
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
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
