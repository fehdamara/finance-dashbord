import { useSelector } from "react-redux";

export default function Dashboard() {
  const { role } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>{role === "admin" ? "Admin" : "User"} Dashboard</h2>
      <p>Here is your financial overview.</p>
    </div>
  );
}
