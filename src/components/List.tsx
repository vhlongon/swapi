import { capitalize } from '@/lib/utils';
import React from 'react';

type ListProps = Record<string, string | number>;

export const List = (props: ListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-4 w-full justify-between">
      {Object.entries(props).map(([key, value]) => {
        return (
          <li
            key={key}
            className="flex flex-col even:items-end odd:items-start prose prose-sm"
          >
            <span>{capitalize(key)}</span>
            <span>{value}</span>
            <div className="divider m-1" />
          </li>
        );
      })}
    </ul>
  );
};
