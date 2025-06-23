import { useParams } from "react-router-dom";

export default function TransactionDetail() {
  const { id } = useParams();
  return (
    <div>
      <h3>Transaction Detail</h3>
      <p>ID: {id}</p>
      {/* Replace with fetch call to real data */}
    </div>
  );
}
