import { FormEvent, useState } from "react";

interface Props {
  onPlayerSubmit: (playerName: string) => void;
}

function PlayerForm({ onPlayerSubmit }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setName("");
    onPlayerSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PlayerForm;
