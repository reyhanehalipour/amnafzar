import { ColumnDef } from "@tanstack/react-table";

import { User } from "../types/user.types";
import { UserActions } from "./user-actions";


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <UserActions user={row.original} />
    ),
  },
];