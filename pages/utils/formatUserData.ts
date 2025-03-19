import { DepartmentStats, User } from "../interfaces/user";

export function formatUserData(users: User[]): Record<string, DepartmentStats> {
  const departmentMap: Record<string, DepartmentStats> = {};

  users.forEach((user) => {
    const {
      company: { department },
      gender,
      hair,
      firstName,
      lastName,
      address,
    } = user;

    if (!departmentMap[department]) {
      departmentMap[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    const dept = departmentMap[department];

    if (gender === "male") {
      dept.male++;
    } else {
      dept.female++;
    }

    dept.hair[hair.color] = (dept.hair[hair.color] || 0) + 1;

    dept.addressUser[`${firstName}${lastName}`] = address.postalCode;
  });

  for (const department in departmentMap) {
    const deptUsers = users.filter((v) => v.company.department === department);
    const ages = deptUsers.map((v) => v.age);
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    departmentMap[department].ageRange = `${minAge}-${maxAge}`;
  }

  return departmentMap;
}
