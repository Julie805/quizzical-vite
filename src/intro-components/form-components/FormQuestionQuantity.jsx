
import '../form.css'

export default function FormQuestionQuantity ({ number, handleChange }) {

  return (
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
  )
}