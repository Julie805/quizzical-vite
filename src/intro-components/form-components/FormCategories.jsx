import '../form.css'

const options = [
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

export default function FormCategories( {handleChange}) {
  const categoryOptions = options.map((item => {
    return <option value={item.value}>{item.label}</option>
  }))

   return (
    <div className="form-item"> 
      <label htmlFor="category">Select quiz category:</label>
      <select id="category" name="category" onChange={handleChange}>
        {categoryOptions}
      </select>
    </div>
   )
}
