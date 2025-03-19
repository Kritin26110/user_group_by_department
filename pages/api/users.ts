import { getUsers } from "@/src/lib/api";
import { formatUserData } from "@/src/utils/formatUserData";
import type { NextApiRequest, NextApiResponse } from "next";

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
