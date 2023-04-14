import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export type TableProps<
  TRow extends Record<string, unknown> = Record<string, unknown>
> = {
  data: TRow[];
  columns: ColumnDef<TRow, string>[];
  onRowClick?: (url: string) => void;
};

const Table = <TRow extends Record<string, unknown> = Record<string, unknown>>({
  data,
  columns,
  onRowClick,
}: TableProps<TRow>) => {
  const table = useReactTable<TRow>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="daisy-table w-full">
        <thead className="">
          {table.getHeaderGroups().map((headerGroups) => (
            <tr key={headerGroups.id}>
              {headerGroups.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const handleRowClick = () => {
              if (onRowClick && typeof row.original.id === 'string') {
                onRowClick(row.original.id)
              }
            }

            return (
              <tr key={row.id} onClick={handleRowClick} className="cursor-pointer daisy-hover">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
