import Pagination from "@/components/ui/Pagination";
import SecuredAddButton from "@/components/ui/SecuredAddButton";

export default function RoutinesPage() {
  return (
    <div>
      <SecuredAddButton text="Add routine" href="/routines/add" />
      <Pagination currentPage={0} numberOfPages={0} />
    </div>
  );
}
