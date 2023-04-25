import '../form.css'

export default function FormDifficulty ( {handleChange}) {

  return (
    <div className="form-item">
    <label htmlFor="difficulty">Select difficulty level:</label>
    <select id="difficulty" name="difficulty" onChange={handleChange}>
      <option value="">Any Difficulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
  )
}