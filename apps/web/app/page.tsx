"use client";
import { Button } from "./component-registry";

export default function Home() {
  return (
    <div>
      <Button variant="facebook" size="xl">
        Open alert
      </Button>
      <Button variant="danger" size="md">
        Delete
      </Button>
      <Button>default</Button>
    </div>
  );
}
