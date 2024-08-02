"use client";
import { updateRole } from "@/actions/updateRole";

type FormUserAdminProps = {
  role: "ADMIN" | "USER";
  id: string;
};

enum roles {
  user = "USER",
  admin = "ADMIN",
}

const FormUserAdmin = ({ role, id }: FormUserAdminProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault();
    updateRole(id, event.target.value).then((data) => {
      console.log(data.success);
    });
  };

  return (
    <div>
      <select
        name="select"
        id="select"
        onChange={handleChange}
        defaultValue={role}
      >
        <option value={roles.admin}>Admin</option>
        <option value={roles.user}>User</option>
      </select>
    </div>
  );
};

export default FormUserAdmin;
