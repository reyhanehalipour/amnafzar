"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useCreateUser } from "../hooks/useCreator";

import {
  createUserSchema,
  CreateUserFormValues,
  defaultCreateUserValues,
} from "../schemas/user.schema";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateUserDialog({
  open,
  onOpenChange,
}: Props) {
  const { mutate, isPending } = useCreateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: defaultCreateUserValues,
  });

  const handleDialogChange = (open: boolean) => {
    if (!open) {
      reset(defaultCreateUserValues);
    }

    onOpenChange(open);
  };

  const onSubmit: SubmitHandler<CreateUserFormValues> = (
    values
  ) => {
    mutate(values, {
      onSuccess: () => {
        handleDialogChange(false);
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleDialogChange}
    >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
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
              <option value="active">
                Active
              </option>
              <option value="inactive">
                Inactive
              </option>
            </select>

            {errors.status && (
              <p className="mt-1 text-sm text-red-500">
                {errors.status.message}
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2">Country</Label>
            <Input
              {...register("profile.country")}
            />
            {errors.profile?.country && (
              <p className="mt-1 text-sm text-red-500">
                {
                  errors.profile.country
                    .message
                }
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2">City</Label>
            <Input
              {...register("profile.city")}
            />
            {errors.profile?.city && (
              <p className="mt-1 text-sm text-red-500">
                {errors.profile.city.message}
              </p>
            )}
          </div>

          <div className="col-span-2">
            <Label className="mb-2">
              Employee ID
            </Label>
            <Input
              {...register(
                "profile.employee_id"
              )}
            />
            {errors.profile
              ?.employee_id && (
              <p className="mt-1 text-sm text-red-500">
                {
                  errors.profile
                    .employee_id.message
                }
              </p>
            )}
          </div>

          <div className="col-span-2 mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                handleDialogChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isPending}
            >
              {isPending
                ? "Creating..."
                : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}