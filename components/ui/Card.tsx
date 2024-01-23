import { title } from "process";

export type CardProps = {
  children: JSX.Element[];
};

export default function Card({ children }: CardProps) {
  return (
    <div className="group outline outline-1 outline-gray-100 hover:shadow-xl bg-white rounded-lg shadow-md">
      {children}
    </div>
  );
}
