import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { BuildingLibraryIcon, ChartBarIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import BarChart from '../components/BarChart';
import Transaction from '../components/Transaction';
import { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChart, getSummary, getTransactions } from '../store/action';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-orange-500"></div>
  </div>
);

const stats = [
  { id: 1, name: 'Stock', stat: '$71,897', icon: ChartBarIcon, change: '122%', changeType: 'increase' },
  { id: 2, name: 'Mutual fund', stat: '$58.16', icon: BanknotesIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Bank', stat: '$24.57', icon: BuildingLibraryIcon, change: '3.2%', changeType: 'decrease' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const [type, setType] = useState(1);
  const { transaction, summary, isLoaderOn, chart } = useSelector((store) => store.dashboard || {});

  useEffect(() => {
    dispatch(getTransactions(type));
  }, [type]);

  useEffect(() => {
    dispatch(getSummary());
  }, []);

  useEffect(() => {
    dispatch(getChart());
  }, []);

  const updatedStats = summary?.summary
    ? stats.map((item) => {
        let stat = '$0';
        let change = 'N/A';
        let changeType = 'neutral';
        let icon = item.icon;

        if (item.name === 'Stock' && summary.summary?.equity) {
          stat = `$${summary.summary.equity.amount ?? 0}`;
          change = summary.summary?.equity.change ?? 'N/A';
          changeType = summary.summary?.equity.change?.startsWith('+') ? 'increase' : 'decrease';
        }

        if (item.name === 'Mutual fund' && summary.summary.mutual_fund) {
          stat = `$${summary.summary.mutual_fund.amount ?? 0}`;
          change = summary.summary.mutual_fund.change ?? 'N/A';
          changeType = summary.summary.mutual_fund.change?.startsWith('+') ? 'increase' : 'decrease';
        }

        if (item.name === 'Bank' && summary.summary.bank) {
          stat = `$${summary.summary.bank.amount ?? 0}`;
          change = summary.summary.bank.change ?? 'N/A';
          changeType = summary.summary.bank.change ? (summary.summary.bank.change.startsWith('+') ? 'increase' : 'decrease') : 'neutral';
        }

        return { ...item, stat, change, changeType, icon };
      })
    : stats;
  if (isLoaderOn) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {updatedStats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white p-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute top-4 left-4 rounded-lg bg-gray-100 p-3">
                <item.icon aria-hidden="true" className="h-6 w-6 text-orange-400" />
              </div>
            </dt>
            <p className="mt-16 text-sm font-medium text-gray-600">{item.name}</p>
            <dd className="mt-2 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            <p
              className={classNames(
                item.changeType === 'increase' ? 'text-green-600' : item.changeType === 'decrease' ? 'text-red-600' : 'text-gray-500',
                'absolute bottom-6 right-4 flex items-baseline text-sm font-semibold'
              )}
            >
              {item.changeType === 'increase' && (
                <ArrowUpIcon aria-hidden="true" className="h-5 w-5 shrink-0 self-center text-green-500" />
              )}
              {item.changeType === 'decrease' && (
                <ArrowDownIcon aria-hidden="true" className="h-5 w-5 shrink-0 self-center text-red-500" />
              )}
              {item.changeType === 'neutral' && (
                <span className="h-5 w-5 shrink-0 self-center text-gray-500">•</span>
              )}
              <span className="sr-only">
                {item.changeType === 'increase' ? 'Increased' : item.changeType === 'decrease' ? 'Decreased' : 'No change'} by
              </span>
              {item.change}
            </p>
          </div>
        ))}
      </dl>
      <div>
        <BarChart/>
      </div>
      <div>
        {transaction?.length > 0 && <Transaction setType={setType} type={type} transaction={transaction} />}
      </div>
    </div>
  );
}
