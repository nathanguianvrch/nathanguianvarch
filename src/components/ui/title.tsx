import * as React from "react";

export function Title({ text }: { text: React.ReactNode }) {
  return <div className="text-5xl text-center font-bold mb-8">{text}</div>;
}
