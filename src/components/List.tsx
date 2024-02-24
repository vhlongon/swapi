import { capitalize } from '@/utils/utils';
import React from 'react';

type ListProps = Record<string, string | number | string[]>;

export const List = (props: ListProps) => {
  return (
    <ul>
      {Object.entries(props).map(([key, value]) => {
        const outputValue = Array.isArray(value) ? (
          <ul>
            {value.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        ) : (
          value
        );
        return (
          <li key={key}>
            <span>
              {capitalize(key)}: {outputValue}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
