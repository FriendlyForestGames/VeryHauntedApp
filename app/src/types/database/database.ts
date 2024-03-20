import { ColumnType, Selectable } from 'kysely';

export interface Database {
  consoleUser: ConsoleUserTable;
}

export interface ConsoleUserTable {
  create_time: ColumnType<Date, string>;
  disable_time: ColumnType<Date, string>;
  email: ColumnType<string>;
  id: ColumnType<string>; // UUID
  // metadata: JSONColumnType<{}>;
  password: ColumnType<string>;
  role: ColumnType<number>;
  update_time: ColumnType<Date, string>;
  username: ColumnType<string>;
}

export type ConsoleUser = Selectable<ConsoleUserTable>;
