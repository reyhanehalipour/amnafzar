"use client";

import { User } from "../types/user.types";
import { columns } from "../columns/user-columns";
import { DataTable } from "@/components/data-table/dataTable";



interface UsersTableProps {
  users: User[];
}

export function UsersTable({
  users,
}: UsersTableProps) {
  return (
    <DataTable
      columns={columns}
      data={users}
    />
  );
}