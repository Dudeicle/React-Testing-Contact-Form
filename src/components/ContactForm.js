import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* FIRST NAME INPUT */}
        <div>
          <label htmlFor="firstName">
            First Name*
          </label>

          <input
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        {/* LAST NAME INPUT */}
        <div>
          <label htmlFor="lastName">
            Last Name*
          </label>

          <input
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        {/* EMAIL INPUT */}
        <div>
          <label htmlFor="email">
            Email*
          </label>

          <input 
            name="email"
            placeholder="bluebill1049@hotmail.com"
            ref={register({ required: true })} 
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>

        {/* MESSAGE INPUT */}
        <div>
          <label htmlFor="message">
            Message
          </label>

          <textarea
            data-testid="message"
            name="message"
            ref={register({ required: false })} 
          />
        </div>

        {/* RESULT OF FORM SUBMISSION */}
        {data && (
          <pre data-testid="result" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid='submit' />
      </form>
    </div>
  );
};

export default ContactForm;
