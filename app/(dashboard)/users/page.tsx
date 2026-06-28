"use client";

import { useState } from "react";

import { useUsers } from "@/features/users/hooks/useUsers";
import { useFilteredUsers } from "@/features/users/hooks/useFilteredUsers";

import { UsersFilter } from "@/features/users/components/users-filter";
import { UsersTable } from "@/features/users/components/users-table";
import { CreateUserDialog } from "@/features/users/components/create-user-dialog";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function UsersPage() {
  const { data, isLoading, error } = useUsers();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [status, setStatus] = useState("all");

  const [openCreate, setOpenCreate] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  const limit = 10;

  if (isLoading)
    return (
      <div className="p-6 space-y-6 my-10">
        {" "}
        <div className="flex flex-wrap items-center  w-[90%] gap-4 mb-6">
          <Skeleton className="w-1/8 h-10" />
          <Skeleton className="w-1/8 h-10" />
          <Skeleton className=" w-1/8 h-10" />
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-10" />
        ))}
      </div>
    );
  if (error) return <p>{error.message}</p>;

  const users = data?.data ?? [];

  const filteredUsers = useFilteredUsers({
    users,
    search,
    department,
    status,
  });

  // pagination
  const totalPages = Math.ceil(filteredUsers.length / limit);

  const paginatedUsers = filteredUsers.slice((page - 1) * limit, page * limit);
  console.log(data);

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Users</h1>

        <Button onClick={() => setOpenCreate(true)}>+ Add User</Button>
      </div>

      {/* Filters */}
      <UsersFilter
        search={search}
        onSearchChange={setSearch}
        department={department}
        onDepartmentChange={setDepartment}
        status={status}
        onStatusChange={setStatus}
      />

      {/* Table */}
      <UsersTable users={paginatedUsers} />

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </Button>

        <span className="text-sm">
          Page {page} of {totalPages || 1}
        </span>

        <Button
          variant="outline"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>

      {/* Create Dialog */}
      <CreateUserDialog open={openCreate} onOpenChange={setOpenCreate} />
    </div>
  );
}
