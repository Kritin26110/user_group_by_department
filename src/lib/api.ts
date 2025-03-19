import axios from "axios";
import { User } from "../interfaces/user";

export async function getUsers(): Promise<User[]> {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data.users;
}
