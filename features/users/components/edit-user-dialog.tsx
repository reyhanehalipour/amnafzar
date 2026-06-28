"use client";

import { useEffect } from "react";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { User } from "../types/user.types";
import { useUpdateUser } from "../hooks/useUpdateUser";

import {
  updateUserSchema,
  UpdateUserFormValues,
} from "../schemas/user.schema";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
}

export function EditUserDialog({
  open,
  onOpenChange,
  user,
}: EditUserDialogProps) {
  const { mutate, isPending } = useUpdateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      department: user.department,
      status: user.status,
    },
  });

  useEffect(() => {
    reset({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      department: user.department,
      status: user.status,
    });
  }, [user, reset]);

  const onSubmit: SubmitHandler<UpdateUserFormValues> = (
    values
  ) => {
    mutate(
      {
        id: user.id,
        payload: values,
      },
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <Label className="mb-2">First Name</Label>
            <Input {...register("first_name")} />
            {errors.first_name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2">Last Name</Label>
            <Input {...register("last_name")} />
            {errors.last_name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.last_name.message}
              </p>
            )}
          </div>

          <div className="col-span-2">
            <Label className="mb-2">Email</Label>
            <Input
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2">Phone</Label>
            <Input {...register("phone")} />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2">Department</Label>
            <Input {...register("department")} />
            {errors.department && (
              <p className="mt-1 text-sm text-red-500">
                {errors.department.message}
              </p>
            )}
          </div>

          <div className="col-span-2">
            <Label className="mb-2">Status</Label>

            <select
              {...register("status")}
              className="h-10 w-full rounded-md border px-3"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            {errors.status && (
              <p className="mt-1 text-sm text-red-500">
                {errors.status.message}
              </p>
            )}
          </div>

          <div className="col-span-2 mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}