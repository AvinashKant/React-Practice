import { useMemo, useState } from "react";

export default function NxN() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  const grid = useMemo(() => {
    const rowNum = parseInt(row, 10);
    const colNum = parseInt(column, 10);

    if (isNaN(rowNum) || isNaN(colNum) || rowNum <= 0 || colNum <= 0) {
      return null; // Return null if invalid input
    }

    const tableRows = Array.from({ length: rowNum }, (_, i) => (
      <tr key={i}>
        {Array.from({ length: colNum }, (_, j) => (
          <th key={j} className="border border-gray-300">
            0
          </th>
        ))}
      </tr>
    ));

    return (
      <table className="w-full mt-2 table-none md:table-fixed border border-gray-400">
        <tbody>{tableRows}</tbody>
      </table>
    );
  }, [row, column]); // Re-calculate only when row or column changes

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            N*N Grid boxes
          </h2>
          <div className="flex justify-center mt-4">
            <input
              type="number"
              className="w-10 h-10"
              placeholder="N"
              onChange={(e) => setRow(e.target.value)}
              value={row}
            />
            <span className="mx-2 text-bold">x</span>
            <input
              type="number"
              className="mx-2 w-10 h-10"
              placeholder="N"
              onChange={(e) => setColumn(e.target.value)}
              value={column}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 border-t-2 border-gray-200">{grid}</div>
    </>
  );
}
