import { capitalize } from '@/lib/utils';
import React from 'react';

type ListProps = Record<string, string | number>;

export const List = (props: ListProps) => {
  return (
    <ul>
      {Object.entries(props).map(([key, value]) => {
        return (
          <li key={key}>
            <span>
              {capitalize(key)}: {value}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
