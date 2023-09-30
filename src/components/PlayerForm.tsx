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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 p-2.5"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default PlayerForm;
