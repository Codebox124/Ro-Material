import { useEffect, useRef, useState } from "react";
import { Box, useTheme } from "@mui/material";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomBottomSheet({ isOpen, onClose, children }: Props) {
  const theme = useTheme();
  const sheetRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (!isOpen) setTranslateY(100);
    else setTranslateY(0);
  }, [isOpen]);

  // Detect clicks outside the bottom sheet
  const handleClickOutside = (event: MouseEvent) => {
    if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Dragging down to close
  const handleTouchStart = (event: React.TouchEvent) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (startY !== null) {
      const deltaY = event.touches[0].clientY - startY;
      if (deltaY > 0) setTranslateY(Math.min(deltaY, 100)); // Limit drag distance
    }
  };

  const handleTouchEnd = () => {
    if (translateY > 50) {
      onClose(); // Close if dragged enough
    }
    setTranslateY(0);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: isOpen ? "375px" : "0",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
        boxShadow: "0px -4px 10px rgba(0,0,0,0.1)",
        borderRadius: "16px 16px 0 0",
        transition: "transform 0.3s ease-in-out",
        transform: `translateY(${isOpen ? translateY : 100}%)`,
        zIndex: 1000,
      }}
      ref={sheetRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        sx={{
          width: "40px",
          height: "5px",
          backgroundColor: "#ccc",
          borderRadius: "10px",
          margin: "8px auto",
        }}
      />
      <Box p={2}>{children}</Box>
    </Box>
  );
}
