import { fetchPlanData } from "@/lib/plans";

type PlanPageProps = {
  params: {
    planId: string;
  };
};

export default async function PlanPage({ params }: PlanPageProps) {
  const planData = await fetchPlanData(params.planId);

  return <div>{params.planId}</div>;
}
