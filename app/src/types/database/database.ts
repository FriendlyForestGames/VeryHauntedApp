import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface ConsoleUser {
  create_time: Generated<Timestamp>;
  disable_time: Generated<Timestamp>;
  email: string;
  id: string;
  metadata: Generated<Json>;
  password: Buffer | null;
  role: Generated<number>;
  update_time: Generated<Timestamp>;
  username: string;
}

export interface GroupEdge {
  destination_id: string;
  position: Int8;
  source_id: string;
  state: Generated<number>;
  update_time: Generated<Timestamp>;
}

export interface Groups {
  avatar_url: string | null;
  create_time: Generated<Timestamp>;
  creator_id: string;
  description: string | null;
  disable_time: Generated<Timestamp>;
  edge_count: Generated<number>;
  id: string;
  lang_tag: Generated<string>;
  max_count: Generated<number>;
  metadata: Generated<Json>;
  name: string;
  state: Generated<number>;
  update_time: Generated<Timestamp>;
}

export interface Leaderboard {
  authoritative: Generated<boolean>;
  category: Generated<number>;
  create_time: Generated<Timestamp>;
  description: Generated<string>;
  duration: Generated<number>;
  end_time: Generated<Timestamp>;
  id: string;
  join_required: Generated<boolean>;
  max_num_score: Generated<number>;
  max_size: Generated<number>;
  metadata: Generated<Json>;
  operator: Generated<number>;
  reset_schedule: string | null;
  size: Generated<number>;
  sort_order: Generated<number>;
  start_time: Generated<Timestamp>;
  title: Generated<string>;
}

export interface LeaderboardRecord {
  create_time: Generated<Timestamp>;
  expiry_time: Generated<Timestamp>;
  leaderboard_id: string;
  max_num_score: Generated<number>;
  metadata: Generated<Json>;
  num_score: Generated<number>;
  owner_id: string;
  score: Generated<Int8>;
  subscore: Generated<Int8>;
  update_time: Generated<Timestamp>;
  username: string | null;
}

export interface Message {
  code: Generated<number>;
  content: Generated<Json>;
  create_time: Generated<Timestamp>;
  id: string;
  sender_id: string;
  stream_descriptor: string;
  stream_label: string;
  stream_mode: number;
  stream_subject: string;
  update_time: Generated<Timestamp>;
  username: string;
}

export interface MigrationInfo {
  applied_at: Timestamp | null;
  id: string;
}

export interface Notification {
  code: number;
  content: Generated<Json>;
  create_time: Generated<Timestamp>;
  id: string;
  sender_id: string;
  subject: string;
  user_id: string;
}

export interface Purchase {
  create_time: Generated<Timestamp>;
  environment: Generated<number>;
  product_id: string;
  purchase_time: Generated<Timestamp>;
  raw_response: Generated<Json>;
  refund_time: Generated<Timestamp>;
  store: Generated<number>;
  transaction_id: string;
  update_time: Generated<Timestamp>;
  user_id: Generated<string>;
}

export interface Storage {
  collection: string;
  create_time: Generated<Timestamp>;
  key: string;
  read: Generated<number>;
  update_time: Generated<Timestamp>;
  user_id: string;
  value: Generated<Json>;
  version: string;
  write: Generated<number>;
}

export interface Subscription {
  create_time: Generated<Timestamp>;
  environment: Generated<number>;
  expire_time: Timestamp;
  original_transaction_id: string;
  product_id: string;
  purchase_time: Generated<Timestamp>;
  raw_notification: Generated<Json>;
  raw_response: Generated<Json>;
  refund_time: Generated<Timestamp>;
  store: Generated<number>;
  update_time: Generated<Timestamp>;
  user_id: Generated<string>;
}

export interface UserDevice {
  id: string;
  preferences: Generated<Json>;
  push_token_amazon: Generated<string>;
  push_token_android: Generated<string>;
  push_token_huawei: Generated<string>;
  push_token_ios: Generated<string>;
  push_token_web: Generated<string>;
  user_id: string;
}

export interface UserEdge {
  destination_id: string;
  position: Int8;
  source_id: string;
  state: Generated<number>;
  update_time: Generated<Timestamp>;
}

export interface Users {
  apple_id: string | null;
  avatar_url: string | null;
  create_time: Generated<Timestamp>;
  custom_id: string | null;
  disable_time: Generated<Timestamp>;
  display_name: string | null;
  edge_count: Generated<number>;
  email: string | null;
  facebook_id: string | null;
  facebook_instant_game_id: string | null;
  gamecenter_id: string | null;
  google_id: string | null;
  id: string;
  lang_tag: Generated<string>;
  location: string | null;
  metadata: Generated<Json>;
  password: Buffer | null;
  steam_id: string | null;
  timezone: string | null;
  update_time: Generated<Timestamp>;
  username: string;
  verify_time: Generated<Timestamp>;
  wallet: Generated<Json>;
}

export interface UserTombstone {
  create_time: Generated<Timestamp>;
  user_id: string;
}

export interface WalletLedger {
  changeset: Json;
  create_time: Generated<Timestamp>;
  id: string;
  metadata: Json;
  update_time: Generated<Timestamp>;
  user_id: string;
}

export interface DB {
  console_user: ConsoleUser;
  group_edge: GroupEdge;
  groups: Groups;
  leaderboard: Leaderboard;
  leaderboard_record: LeaderboardRecord;
  message: Message;
  migration_info: MigrationInfo;
  notification: Notification;
  purchase: Purchase;
  storage: Storage;
  subscription: Subscription;
  user_device: UserDevice;
  user_edge: UserEdge;
  user_tombstone: UserTombstone;
  users: Users;
  wallet_ledger: WalletLedger;
}
