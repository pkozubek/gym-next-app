import { getUserProfileData } from "@/lib/server/services/authService";
import Link from "next/link";

type SecuredAddButtonProps = {
  text: string;
  href: string;
};

export default async function SecuredAddButton({
  href,
  text,
}: SecuredAddButtonProps) {
  const user = await getUserProfileData();

  if (!user) return null;

  return (
    <Link href={href}>
      <div className="flex flex-row">
        <div className="flex-grow mx-4 mt-2 mb-4 px-4 py-2 bg-green-400 text-white hover:bg-green-500 hover:text-white text-center rounded-sm">
          {text}
        </div>
      </div>
    </Link>
  );
}
