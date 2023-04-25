import "./form.css"
import FormCategories from "./form-components/FormCategories"
import FormDifficulty from './form-components/FormDifficulty'
import FormQuestionQuantity from "./form-components/FormQuestionQuantity"

// This is a beefy component
// Might want to break each input into its own component(mimic a custom ui-library/start building your own ui-library)
// input values change here so you should probably try to handle the change here



export default function Form({ number, handleChange }) {
 
  return (
    <form className="form-container">
      <FormQuestionQuantity number={number} handleChange={handleChange} />
      {/* <div className="form-item">
        <label htmlFor="number">Number of questions:</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="5"
          value={number}
          onChange={handleChange}
        />
      </div> */}
      <FormDifficulty onChange={handleChange} />
      <FormCategories onChange={handleChange} />
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