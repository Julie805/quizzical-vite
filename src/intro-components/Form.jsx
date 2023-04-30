import "./form.css"
import FormCategories from "./form-components/FormCategories"
import FormDifficulty from './form-components/FormDifficulty'
import FormQuestionQuantity from "./form-components/FormQuestionQuantity"
import FormCheckbox from "./form-components/FormCheckbox"


// input values change here so you should probably try to handle the change here

export default function Form({ number, handleChange }) {

  return (
    <form className="form-container">
      <FormQuestionQuantity number={number} handleChange={handleChange} />
      <FormDifficulty handleChange={handleChange} />
      <FormCategories handleChange={handleChange} />
      <FormCheckbox handleChange={handleChange} />
    </form>
  );
}