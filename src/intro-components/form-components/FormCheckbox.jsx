import '../form.css'

export default function FormCheckbox ( {handleChange}) {

  return (
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
  )
}