import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({firstName: "", lastName: ""});

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;

    setFormData((currentData) => {
      return { ...currentData, [fieldName]: value };
    });
  }

  function handleSubmit() {
    console.log(formData.firstName, formData.lastName);
  }

  return (
    <div>
      <h1>Signup Form</h1>
      <label htmlFor={formData.firstName}>First Name</label>
      <input
        type="text"
        placeholder="First Name"
        id="firstName" 
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor={formData.lastName}>Last Name</label>
      <input
        type="text"
        placeholder="First Name"
        id="lastName" 
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

<label htmlFor={formData.password}>Password</label>
      <input
        type="password"
        placeholder="First Name"
        id="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
