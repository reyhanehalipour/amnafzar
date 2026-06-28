"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { User } from "../types/user.types";


interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
}

export function EditUserDialog({
  open,
  onOpenChange,
  user,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit User
          </DialogTitle>
        </DialogHeader>

        <UserForm
          user={user}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}