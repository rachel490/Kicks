import React, { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import * as S from './styles';
import { TableHead, TableBody } from 'components/Admin/UserDataTable/styles';
import { IVideoItem } from 'types';
import { VIDEO_COLUMNS } from './columns';

interface Props {
  videoData: IVideoItem[];
}

export const VideoDataTable = ({ videoData }: Props) => {
  const columns = useMemo(() => VIDEO_COLUMNS, []);
  const data = useMemo(() => videoData, [videoData]);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns,
        data
      },
      usePagination
    );

  const handleDeleteVideo = () => {
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      alert('삭제 되었습니다.');
    }
  };

  return (
    <S.TableContainer>
      <S.ContentTable {...getTableProps()}>
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
                  const isThumbnail = cell.column.id === 'thumbnail_url';
                  const isUrl = cell.column.id === 'video_url';
                  const isStatus = cell.column.id === 'status';

                  return (
                    <td {...cell.getCellProps()}>
                      {isThumbnail ? (
                        <img src={cell.value} alt="" />
                      ) : isUrl ? (
                        <a href={cell.value}>{cell.value}</a>
                      ) : (
                        cell.value
                      )}
                      {isStatus && (
                        <S.DeleteButton onClick={handleDeleteVideo}>
                          삭제하기
                        </S.DeleteButton>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </TableBody>
      </S.ContentTable>
      {data.length === 0 && <S.EmptyVideo>No Videos</S.EmptyVideo>}
    </S.TableContainer>
  );
};
