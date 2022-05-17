import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { usePagination, useTable } from 'react-table';
import * as S from './styles';
import { COLUMNS } from 'components/Admin/UserDataTable/columns';
import { Wrap } from 'pages/AdminUserPage/styles';
import { TableHead, TableBody } from 'components/Admin/UserDataTable/styles';
import { IUserAdmin, IVideoItem } from 'data/types';
import { VideoDataTable } from 'components';
import { ADMIN_CONTENT_API } from 'utils/api';
import useSWR from 'swr';
import { fetcherWithToken } from 'utils/swr';

export const AdminDashBoard = () => {
  const { userId } = useParams() as { userId: string };
  const { data: videos } = useSWR(
    ADMIN_CONTENT_API(0, 0, userId),
    fetcherWithToken
  );
  const location = useLocation();
  const data = (location.state as IUserAdmin[]) || [];
  const columns = useMemo(() => COLUMNS.slice(0, 5), []);
  const videoData = videos?.data as IVideoItem[];

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
    <Wrap>
      <S.BoardTitle>User DashBoard</S.BoardTitle>
      <S.UserTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.value}</td>;
                })}
              </tr>
            );
          })}
        </TableBody>
      </S.UserTable>

      <S.ContentTitle>{data[0].name}님이 업로드한 영상</S.ContentTitle>
      <VideoDataTable videoData={videoData ? videoData : []} />
    </Wrap>
  );
};
