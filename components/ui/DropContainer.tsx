import { useDrop } from "react-dnd";

type DropContainerProps = {
  children: JSX.Element;
};

export default function DropContainer({ children }: DropContainerProps) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "exercise",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return <div ref={drop}>{children}</div>;
}
