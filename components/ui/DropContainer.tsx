import { useDrop } from "react-dnd";

type DropContainerProps = {
  children: JSX.Element;
  accept: string[];
  containerName: string;
  className?: string;
  onDropClassNames?: string;
};

export default function DropContainer({
  children,
  accept,
  containerName,
  className,
  onDropClassNames,
}: DropContainerProps) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept,
    drop: () => ({ name: containerName }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const additonalClasses =
    !!onDropClassNames && canDrop && isOver ? onDropClassNames : "";

  return (
    <div className={`${className} ${additonalClasses}`} ref={drop}>
      {children}
    </div>
  );
}
