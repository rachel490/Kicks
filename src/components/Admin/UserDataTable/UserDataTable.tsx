import React, { useMemo } from 'react';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import dayjs from 'dayjs';
import * as S from './styles';
import { IUserAdmin } from 'data/types';

interface Props {
  userData: IUserAdmin[];
}

export const UserDataTable = ({ userData }: Props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => userData, [userData]);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns,
        data
      },
      usePagination
    );

  return (
    <S.Table {...getTableProps()}>
      <S.TableHead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </S.TableHead>

      <S.TableBody {...getTableBodyProps()}>
        {page.map((row: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                const isDate =
                  cell.getCellProps().key.includes('data_joined') ||
                  cell.getCellProps().key.includes('last_login');
                return (
                  <td {...cell.getCellProps()}>
                    {isDate
                      ? dayjs(cell.value).format('YYYY-MM-DD HH:mm:ss')
                      : cell.value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </S.TableBody>
    </S.Table>
  );
};
