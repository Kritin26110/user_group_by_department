import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../lib/api";
import { formatUserData } from "../utils/formatUserData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await getUsers();
    const transformedData = formatUserData(users);
    res.status(200).json(transformedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
