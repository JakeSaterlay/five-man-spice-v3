import { FormEvent, useRef, useState } from "react";

interface Props {
  onPlayerSubmit: (playerName: string) => void;
}

function PlayerForm({ onPlayerSubmit }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPlayerSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PlayerForm;
