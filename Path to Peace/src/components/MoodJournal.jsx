// Lets us use state to store information
import { useState } from "react";

// Lets us move between pages
import { useNavigate } from "react-router-dom";

function MoodJournal() {
  // Creates navigation for the Home button
  const navigate = useNavigate();

  // Stores what the user types in the journal
  const [journal, setJournal] = useState("");

  // Stores all of the journal entries
  const [entries, setEntries] = useState([]);

  // Saves a new journal entry
  function saveEntry() {
    // Checks if the journal is empty
    if (journal === "") {
      alert("Please write something before saving.");
      return;
    }

    // Adds the new entry to the list
    setEntries([...entries, journal]);

    // Clears the text box
    setJournal("");
  }

  // Deletes a journal entry
  function deleteEntry(index) {
    // Creates a new list without the selected entry
    const newEntries = entries.filter((entry, i) => i !== index);

    // Updates the list of entries
    setEntries(newEntries);
  }

  return (
    // Main content of the Mood Journal page
    <main>
      <h1>Mood Journal</h1>

      <p>Write about your day:</p>

      {/* Text box where the user writes their journal entry */}
      <textarea
        value={journal}
        onChange={(event) => setJournal(event.target.value)}
        placeholder="Write your thoughts here..."
      />

      <br />

      {/* Saves the journal entry when clicked */}
      <button onClick={saveEntry}>
        Save Entry
      </button>

      <h2>My Journal Entries</h2>

      {/* Displays each saved journal entry */}
      {entries.map((entry, index) => (
        <div key={index}>
          <p>{entry}</p>

          {/* Deletes the selected journal entry */}
          <button onClick={() => deleteEntry(index)}>
            Delete
          </button>
        </div>
      ))}

      <br />

      {/* Takes the user back to the Home page */}
      <button onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </main>
  );
}

export default MoodJournal;