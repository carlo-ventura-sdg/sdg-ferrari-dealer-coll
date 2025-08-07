import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FerrariOrderCardBase } from "./FerrariOrderCardBase";
import { FerrariOrderCardDialog } from "./FerrariOrderCardDialog";
import PropTypes from "prop-types";
import React from "react";

FerrariOrderCardDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export const FerrariOrderCard = ({ id, item }) => {
  const [open, setOpen] = React.useState(false);
  const [mouseDownTime, setMouseDownTime] = React.useState(null);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: id, data: { item } });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  const handleMouseDown = (event) => {
    setMouseDownTime(Date.now());
    listeners.onMouseDown?.(event); // preserve drag behavior
  };

  const handleMouseUp = () => {
    const now = Date.now();
    if (now - mouseDownTime < 200) {
      // treat as click
      setOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={style}
      >
        <FerrariOrderCardBase item={item} />
      </div>

      <FerrariOrderCardDialog open={open} onClose={handleCloseDialog} id={id} item={item}/>
    </>
  );
};
