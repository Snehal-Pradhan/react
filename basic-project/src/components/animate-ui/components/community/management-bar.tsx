"use client";
import ColorButtonManagementBar from "./ColorButton-management-bar";
import type { ButtonColor } from "./ColorButton-management-bar";
function ManagementBar() {
  const colors = [
    "green",
    "blue",
    "red",
    "yellow",
    "purple",
    "pink",
    "indigo",
    "teal",
    "orange",
    "gray",
  ];
  return (
    <div className="@container/wrapper w-full flex justify-center">
      <div className="flex w-fit flex-col @xl/wrapper:flex-row items-center gap-y-2 gap-x-2 rounded-2xl border border-border bg-background p-2 shadow-lg">
        {colors.map((color) => (
          <ColorButtonManagementBar
            key={color}
            buttonColor={color as ButtonColor}
            label={color.charAt(0).toUpperCase() + color.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}

export { ManagementBar };
