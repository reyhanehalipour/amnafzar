"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import { User } from "../types/user.types";



import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteUserDialog } from "../components/delete-user-dialog";
import { EditUserDialog } from "../components/edit-user-dialog";

interface UserActionsProps {
  user: User;
}

export function UserActions({ user }: UserActionsProps) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setOpenEdit(true);
            }}
          >
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-500"
            onSelect={(e) => {
              e.preventDefault();
              setOpenDelete(true);
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditUserDialog
        open={openEdit}
        onOpenChange={setOpenEdit}
        user={user}
      />

      <DeleteUserDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        user={user}
      />
    </>
  );
}