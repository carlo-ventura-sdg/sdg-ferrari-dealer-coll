import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FerrariOrderCardBase } from "./FerrariOrderCardBase";

export const FerrariOrderCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: item.id, data: { item } });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <FerrariOrderCardBase item={item} />
    </div>
  );
};
