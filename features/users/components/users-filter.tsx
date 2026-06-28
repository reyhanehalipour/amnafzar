"use client";

import { Input } from "@/components/ui/input";

interface UsersFilterProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  department: string;
  onDepartmentChange: (value: string) => void;
}

export function UsersFilter({
  search,
  onSearchChange,
  status,
  onStatusChange,
  department,
  onDepartmentChange,
}: UsersFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <Input
        placeholder="Search name or email..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-72"
      />

      <select
        value={department}
        onChange={(e) => onDepartmentChange(e.target.value)}
        className="h-10 rounded-md border px-3"
      >
        <option value="all">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Operations">Operations</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="h-10 rounded-md border px-3"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}