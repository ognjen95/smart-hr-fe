import "@tanstack/react-table";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RowData } from "@tanstack/table-core";

declare module "@tanstack/table-core" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    tooltipCell?: (cellValue: TValue) => string;
  }
}