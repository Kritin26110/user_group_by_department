import { useEffect, useState } from "react";
import { DepartmentStats } from "./interfaces/user";

export default function Home() {
  const [data, setData] = useState<Record<string, DepartmentStats> | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
