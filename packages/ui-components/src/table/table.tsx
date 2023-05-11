/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion'


export type TableProps<
  TRow extends Record<string, unknown> = Record<string, unknown>
> = {
  data: TRow[];
  columns: ColumnDef<TRow, string>[];
  onRowClick?: (url: string) => void;
  renderCheckbox?: (idx: number, id: string) => JSX.Element;
};

const Table = <TRow extends Record<string, unknown> = Record<string, unknown>>({
  data,
  columns,
  onRowClick,
  renderCheckbox,
}: TableProps<TRow>) => {
  const table = useReactTable<TRow>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={`overflow-x-auto rounded-xl ${renderCheckbox ? 'pl-12' : ''} px-4 relative overflow-hidden`}>
      <table className="table border-separate text-sm w-full border-spacing-y-4">
        <thead className="text-left">
          {table.getHeaderGroups().map((headerGroups) => (
            <tr key={headerGroups.id}>
              {headerGroups.headers.map((header) => (
                <th key={header.id} className="px-4">
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
          {table.getRowModel().rows.map((row, idx) => {
            const handleRowClick = () => {
              if (onRowClick && typeof row.original.id === 'string') {
                onRowClick(row.original.id)
              }
            }
            return (
              <motion.tr
                {... {
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: idx * 0.1 },
                }}
                key={row.id} onClick={handleRowClick} className="cursor-pointer daisy-hover bg-base-100 hover:bg-primary-focus">
                {row.getVisibleCells().map((cell, i) => (
                  <td key={cell.id} className="p-5 border-base-300  [&:first-child]:rounded-l-xl [&:last-child]:rounded-r-xl">
                    <div className="flex items-center gap-1">
                      {renderCheckbox && !i && (
                        <span className="absolute left-[10px]">
                          {renderCheckbox(idx, row.original.id as string)}
                        </span>
                      )}
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  </td>
                ))}
              </motion.tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
