"use client";
import { Button } from "design-system/dist/components/Button";

export default function Home() {
  return (
    <Button label="im a button" onClick={() => console.log("hello word")} />
  );
}
