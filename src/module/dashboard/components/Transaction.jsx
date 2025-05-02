function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Transaction({ setType, type, transaction }) {
  const handleTypeChange = (event) => {
    setType(Number(event.target.value));
  };
  return (
    <div className="w-full rounded-lg bg-white p-5 mt-4 shadow sm:px-6 sm:pt-6 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">
            Transaction History
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="mb-4 w-44">
            <label
              htmlFor="year-select"
              className="block text-sm font-medium text-gray-700"
            >
              Select Type
            </label>
            <select
              id="year-select"
              value={type}
              onChange={handleTypeChange}
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={1}>Stock</option>
              <option value={2}>Mutual Fund</option>
              <option value={3}>Bank</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Remark
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Currency
                  </th>
                </tr>
              </thead>
              <tbody>
                {transaction?.map((transaction, transactionIdx) => (
                  <tr key={transaction.id}>
                    <td
                      className={classNames(
                        transactionIdx !== transaction.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8",
                      )}
                    >
                      {transaction?.remark}
                    </td>
                    <td
                      className={classNames(
                        transactionIdx !== transaction.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell",
                      )}
                    >
                      {transaction?.amount > 0 ? (
                        <>
                          <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                            {transaction?.amount}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
                            {transaction?.amount}
                          </span>
                        </>
                      )}
                    </td>
                    <td
                      className={classNames(
                        transactionIdx !== transaction.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell",
                      )}
                    >
                      {transaction.created_at}
                    </td>
                    <td
                      className={classNames(
                        transactionIdx !== transaction.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                      )}
                    >
                      {transaction.currency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
