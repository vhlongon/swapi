import { capitalize } from '@/lib/utils';
import React from 'react';

type MoreDetailsListProps = Record<string, string | number>;

export const MoreDetailsList = (props: MoreDetailsListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-4 w-full justify-between">
      {Object.entries(props).map(([key, value]) => {
        return (
          <li
            key={key}
            className="flex flex-col even:text-end odd:text-start prose prose-sm justify-between"
          >
            <span>{capitalize(key)}</span>
            <div>
              <span>{value}</span>
              <div className="divider m-1" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
