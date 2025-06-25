import type React from "react";
import { useParams } from "react-router";
import BarDetails from "../components/BarDetails";

const BarPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const barId = id ? Number.parseInt(id, 10) : 1;

  return <BarDetails barId={barId} />;
};

export default BarPage;
