import { TABLE_ROWS, TABLE_ROWS_Deliverables } from "@/data/tabledata";
import { TABLE_ROWS_Type } from "@/types/globaltypes";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const DeliverablesRow = ({ companySize }: { companySize: string }) => {
  return (
    <>
      {/* Deliverables row */}
      <tr>
        <td className="p-4 text-blue-500 font-extrabold text-3xl">
          Deliverables
        </td>
      </tr>

      {/* Deliverables table data row */}
      {TABLE_ROWS_Deliverables.filter(
        (item) => item.company === companySize
      ).map(
        (
          {
            firstColumn: { label, labelText },
            secondColumn,
            thirdColumn,
            fourthColumn,
            fifthColumn,
          }: TABLE_ROWS_Type,
          index: number
        ) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={index}>
              <td className={classes}>
                <b>{label}</b>
                <p className="max-w-[10rem]">{labelText}</p>
              </td>
              <td className={`${classes} `}>
                {secondColumn ? (
                  <CheckIcon className="h-12 w-12 text-blue-500 font-bold m-auto " />
                ) : (
                  <XMarkIcon className="h-12 w-12 text-gray-500 font-bold m-auto" />
                )}
              </td>
              <td className={classes}>
                {thirdColumn ? (
                  <CheckIcon className="h-12 w-12 text-blue-500 font-bold m-auto" />
                ) : (
                  <XMarkIcon className="h-12 w-12 text-gray-500 font-bold m-auto" />
                )}
              </td>
              <td className={`${classes} text-center`}>
                {fourthColumn ? (
                  <CheckIcon className="h-12 w-12 text-blue-500 font-bold m-auto" />
                ) : (
                  <XMarkIcon className="h-12 w-12 text-gray-500 font-bold m-auto" />
                )}
              </td>
              <td className={`${classes} `}>
                {fifthColumn ? (
                  <CheckIcon className="h-12 w-12 text-blue-500 font-bold m-auto" />
                ) : (
                  <XMarkIcon className="h-12 w-12 text-gray-500 font-bold m-auto" />
                )}
              </td>
            </tr>
          );
        }
      )}
    </>
  );
};

export default DeliverablesRow;
