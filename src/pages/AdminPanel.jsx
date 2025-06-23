import { useSelector } from "react-redux";

export default function AdminPanel() {
  const { role } = useSelector((state) => state.auth);
  if (role !== "admin") return <p>Access denied. Admins only.</p>;

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Manage users and transactions here.</p>
    </div>
  );
}
