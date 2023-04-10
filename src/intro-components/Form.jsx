import './form.css'

// This is a beefy component
// Might want to break each input into its own component(mimic a custom ui-library/start building your own ui-library)
// input values change here so you should probably try to handle the change here

const categories = [
  { value: "", label: "All Categories" },
  { value: "9", label: "General Knowlege" },
  { value: "10", label: "Books" },
  { value: "17", label: "Science & Nature" },
  { value: "18", label: "Science & Computers" },
  { value: "19", label: "Mathematics" },
  { value: "20", label: "Mythology" },
  { value: "21", label: "Sports" },
  { value: "22", label: "Geography" },
  { value: "23", label: "History" },
  { value: "24", label: "Politics" },
  { value: "25", label: "Art" },
  { value: "28", label: "Vehicles" },
]

export default function Form({ number, handleChange }) {
  const categoryOptions = categories.map((category => {
    return `<option value=${category.value}>${category.label}</option>`
  }))



  return (
    <form className="form-container">
      <div className="form-item">
        <label htmlFor="number">Number of questions:</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="5"
          value={number}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="difficulty">Select difficulty level:</label>
        <select id="difficulty" name="difficulty" onChange={handleChange}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="category">Select quiz category:</label>
        <select id="category" name="category" onChange={handleChange}>
          {/* Move all these options into an array you can map over. This will help reduce the business of the component */}
        categoryOptions
        </select>
      </div>
      <div>
        <div className="form-item checkbox-div">
          <label htmlFor="timed" className="checkbox-container" >Timed quiz:
            <input
              id="timed"
              name="timed"
              type="checkbox"
              onChange={handleChange} //called in Intro
              defaultChecked
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </form>
  );
}