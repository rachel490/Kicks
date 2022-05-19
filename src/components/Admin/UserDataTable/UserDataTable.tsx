import React, { useMemo } from 'react';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import dayjs from 'dayjs';
import * as S from './styles';
import { IUserAdmin } from 'data/types';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  userData: IUserAdmin[];
}

export const UserDataTable = ({ userData }: Props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => userData, [userData]);
  const { pathname } = useLocation();

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns,
        data
      },
      usePagination
    );

  const handleDeleteUser = () => {
    if (window.confirm('정말 탈퇴처리 하시겠습니까?')) {
      alert('탈퇴 처리 되었습니다.');
    }
  };

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
                const userId = row.original.id;
                const isStatus = cell.column.id === 'status';
                const isDate =
                  cell.column.id === 'createAt' ||
                  cell.column.id === 'lastLoginDate';

                return (
                  <td {...cell.getCellProps()}>
                    {isDate
                      ? dayjs(cell.value).format('YYYY-MM-DD HH:mm:ss')
                      : cell.value}
                    {isStatus && (
                      <S.StatusButton>
                        {!pathname.includes('dashboard') && (
                          <button>
                            <Link
                              to={`/admin/users/dashboard/${userId}`}
                              state={[row.original]}
                            >
                              대쉬보드
                            </Link>
                          </button>
                        )}
                        <button onClick={handleDeleteUser}>탈퇴하기</button>
                      </S.StatusButton>
                    )}
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
