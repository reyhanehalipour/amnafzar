import { User } from "../types/user.types";

interface UseFilteredUsersProps {
  users: User[];
  search: string;
  department: string;
  status: string;
}

export const useFilteredUsers = ({
  users,
  search,
  department,
  status,
}: UseFilteredUsersProps) => {
  return users.filter((user) => {
    const fullName =
      `${user.first_name} ${user.last_name}`.toLowerCase();

    const matchesSearch =
      fullName.includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "all" ||
      user.department === department;

    const matchesStatus =
      status === "all" ||
      user.status === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  });
};