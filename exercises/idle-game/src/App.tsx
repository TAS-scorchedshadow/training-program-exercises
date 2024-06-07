import { useEffect, useState } from "react";

import { File, Line, LineState, Resource } from "./types";
import Highlight from "./components/Highlight";

const CODE_FILES: File[] = [
  {
    filename: "WarpPacket.java",
    language: "java",
  },
  {
    filename: "function.py",
    language: "python",
  }
];

const getRandomLine = async (): Promise<Line> => {
  const fileIndex = Math.floor(Math.random() * CODE_FILES.length);
  const file = CODE_FILES[fileIndex];

  const contents = await fetch(`/code/${file.filename}`);
  const rawText = await contents.text();
  const lines = rawText.split("\n").filter(line => line.length > 0);

  const lineIndex = Math.floor(Math.random() * lines.length);

  return {
    contents: lines[lineIndex].trimStart(),
    language: file.language,
  };
};

export default function App() {
  return <></>;
}
