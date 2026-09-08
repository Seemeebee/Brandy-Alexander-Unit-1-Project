// Lets us use state to store information
import { useState } from "react";

// Lets us use the reusable Button component
import Button from "./Button";

// Lets us move between pages
import { useNavigate } from "react-router-dom";

function MoodJournal() {
  // Creates navigation for the Home button
  const navigate = useNavigate();

  // Stores the title
  const [title, setTitle] = useState("");

  // Stores the selected date
  const [date, setDate] = useState("");

  // Stores the selected mood
  const [mood, setMood] = useState("");

  // Stores what the user types in the journal
  const [journal, setJournal] = useState("");

  // Stores all of the journal entries
  const [entries, setEntries] = useState([]);

  // Stores error messages
  const [errors, setErrors] = useState({});

  // Saves a new journal entry
  function saveEntry() {
    // Creates an empty object for errors
    const newErrors = {};

    // Checks if the title is empty
    if (title === "") {
      newErrors.title = "Please enter a title.";
    }

    // Checks if the date is empty
    if (date === "") {
      newErrors.date = "Please choose a date.";
    }

    // Checks if a mood was selected
    if (mood === "") {
      newErrors.mood = "Please choose a mood.";
    }

    // Checks if the journal is empty
    if (journal === "") {
      newErrors.journal = "Please write something before saving.";
    }

    // Updates the error messages
    setErrors(newErrors);

    // Stops the entry from saving if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Creates a new journal entry
    const newEntry = {
      title: title,
      date: date,
      mood: mood,
      journal: journal,
    };

    // Adds the new entry to the list
    setEntries([...entries, newEntry]);

    // Clears the input fields
    setTitle("");
    setDate("");
    setMood("");
    setJournal("");

    // Clears the error messages
    setErrors({});
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

      <p>
        Record how you are feeling and write about your day.
      </p>

      {/* Input for the journal title */}
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter a title"
        />
      </label>

      {/* Shows an error if the title is empty */}
      {errors.title && <p className="error">{errors.title}</p>}

      <br />

      {/* Input for the date */}
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>

      {/* Shows an error if the date is empty */}
      {errors.date && <p className="error">{errors.date}</p>}

      <br />

      {/* Lets the user choose their mood */}
      <label>
        Mood:
        <select
          value={mood}
          onChange={(event) => setMood(event.target.value)}
        >
          <option value="">Choose a mood</option>
          <option value="Happy">Happy</option>
          <option value="Calm">Calm</option>
          <option value="Anxious">Anxious</option>
          <option value="Sad">Sad</option>
        </select>
      </label>

      {/* Shows an error if a mood is not selected */}
      {errors.mood && <p className="error">{errors.mood}</p>}

      <br />

      {/* Text box where the user writes their journal entry */}
      <textarea
        value={journal}
        onChange={(event) => setJournal(event.target.value)}
        placeholder="Write your thoughts here..."
      />

      {/* Shows an error if the journal is empty */}
      {errors.journal && (
        <p className="error">{errors.journal}</p>
      )}

      <br />

      {/* Saves the journal entry when clicked */}
      <Button onClick={saveEntry}>
        Save Entry
      </Button>

      <h2>My Journal Entries</h2>

      {/* Shows a message if there are no saved entries */}
      {entries.length === 0 && (
        <p>No journal entries saved yet.</p>
      )}

      {/* Displays each saved journal entry */}
      {entries.map((entry, index) => (
        <div key={index}>
          <h3>{entry.title}</h3>

          <p>Date: {entry.date}</p>

          <p>Mood: {entry.mood}</p>

          <p>{entry.journal}</p>

          {/* Deletes the selected journal entry */}
          <Button onClick={() => deleteEntry(index)}>
            Delete
          </Button>
        </div>
      ))}

      <br />

      {/* Takes the user back to the Home page */}
      <Button onClick={() => navigate("/home")}>
        Back to Home
      </Button>
    </main>
  );
}

export default MoodJournal;
