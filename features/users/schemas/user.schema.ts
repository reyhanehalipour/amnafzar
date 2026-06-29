import { z } from "zod";

export const createUserSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required"),

  last_name: z.string().trim().min(1, "Last name is required"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email"),

  phone: z.string().trim().min(1, "Phone is required"),

  department: z
    .string()
    .trim()
    .min(1, "Department is required"),

  status: z.enum(["active", "inactive"]),

  roles: z.array(z.string()),

  profile: z.object({
    country: z
      .string()
      .trim()
      .min(1, "Country is required"),

    city: z
      .string()
      .trim()
      .min(1, "City is required"),

    employee_id: z
      .string()
      .trim()
      .min(1, "Employee ID is required"),
  }),
});

export type CreateUserFormValues = z.infer<
  typeof createUserSchema
>;

export const defaultCreateUserValues: CreateUserFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  department: "",
  status: "active",
  roles: [],
  profile: {
    country: "",
    city: "",
    employee_id: "",
  },
};

/**
 * PATCH schema
 * تمام فیلدها اختیاری هستند.
 */
export const updateUserSchema =
  createUserSchema.partial();

export type UpdateUserFormValues = z.infer<
  typeof updateUserSchema
>;