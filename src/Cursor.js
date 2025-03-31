import React, { useEffect, useState } from "react";

function Cursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [targetX, setTargetX] = useState(0);
  const [targetY, setTargetY] = useState(0);

  useEffect(() => {
    const moveCursor = (e) => {
      setTargetX(e.clientX);
      setTargetY(e.clientY);
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      setCursorX((prevX) => prevX + (targetX - prevX) * 0.15); // 0.2 controls the delay amount
      setCursorY((prevY) => prevY + (targetY - prevY) * 0.15);
      requestAnimationFrame(smoothMove);
    };

    smoothMove();
  }, [targetX, targetY]);

  return (
    <div
      id="cursor"
      style={{
        position: "fixed",
        left: `${cursorX}px`,
        top: `${cursorY}px`,
        backgroundColor: "rgb(146, 103, 216)",
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    ></div>
  );
}

export default Cursor;
