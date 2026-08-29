import { useState } from "react";

function MoodJournal() {
  const [journal, setJournal] = useState("");
  const [entries, setEntries] = useState([]);

  function saveEntry() {
    if (journal === "") {
      alert("Please write something before saving.");
      return;
    }

    setEntries([...entries, journal]);

    setJournal("");
  }

  function deleteEntry(index) {
    const newEntries = entries.filter((entry, i) => i !== index);

    setEntries(newEntries);
  }

  return (
    <div>
      <h1>Mood Journal</h1>

      <p>Write about your day:</p>

      <textarea
        value={journal}
        onChange={(event) => setJournal(event.target.value)}
        placeholder="Write your thoughts here..."
      />

      <br />

      <button onClick={saveEntry}>
        Save Entry
      </button>

      <h2>My Journal Entries</h2>

      {entries.map((entry, index) => (
        <div key={index}>
          <p>{entry}</p>

          <button onClick={() => deleteEntry(index)}>
            Delete
          </button>

          <button onClick={() => navigate("/home")}>
            Back to Home
          </button>
          
        </div>
      ))}
    </div>
  );
}

export default MoodJournal;