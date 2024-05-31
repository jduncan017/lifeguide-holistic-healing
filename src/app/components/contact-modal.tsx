"use client";
// import { useState } from "react";
// import { useFormAndValidation } from "~/hooks/useFormAndValidation";
// import type { FormValues } from "~/hooks/useFormAndValidation";
import ModalWrapper from "~/app/components/ui-components/modal-wrapper";
import Button from "./ui-components/button";

//these are used to build the initial structure for FormValues
// const initialFields = {
//   subject: "",
//   name: "",
//   phone: "",
//   email: "",
//   message: "",
// };

const ContactModal = () => {
  // const [submitConfirm, setSubmitConfirm] = useState("");
  // const [buttonDisplay, setButtonDisplay] = useState("Send");
  // const [buttonDisabled, setButtonDisabled] = useState(false);

  // const submitCallback = async (formData: FormValues) => {
  //   const emailData = { ...formData };
  //   try {
  //     setButtonDisabled(true);
  //     setButtonDisplay("Sending...");
  //     const response = await fetch("/api/emailApi", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(emailData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setSubmitConfirm(data.message);
  //       setButtonDisplay("Sent!");
  //       resetItem();
  //     } else {
  //       console.error("Error:", response.status, response.statusText);
  //       setSubmitConfirm("Failed to send email. Please try again later.");
  //       setButtonDisabled(false);
  //       setButtonDisplay("Send");
  //       throw new Error(`Server responded with status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.error("Request failed:", error);
  //     setButtonDisabled(false);
  //     setButtonDisplay("Send");
  //     setSubmitConfirm(
  //       "We're sorry, there was an error sending the email. Please try again later or send us one manually at info@johngerardwoodwork.com",
  //     );
  //     throw error;
  //   }
  // };

  // const { values, handleChange, errors, isValid, handleSubmit, showError } =
  //   useFormAndValidation(initialFields, submitCallback);

  return (
    <ModalWrapper>
      <div className="contactModal">
        <div className="formWrapper scrollbar-none relative flex max-h-[100dvh] w-full max-w-[550px] flex-col overflow-y-auto p-6 text-center font-sans text-gray-800">
          <h1 className="mb-2 mt-4 border-b border-dotted border-gray-500 font-serif text-4xl font-bold uppercase leading-10">
            Start Your Journey Today:
          </h1>
          <p className="formDescription m-0 w-full text-lg font-normal leading-6">
            Have a question? Looking to try one of our services?
            <br /> Reach out below!
          </p>
          <form
            className="contactForm flex w-full flex-col items-center pt-5 text-left"
            // onSubmit={handleSubmit}
            noValidate
          >
            <div className="contactFormTopSectionWrapper flex w-full justify-between gap-2.5">
              <div className="w-full">
                <div className="inputsColumn firstColumn w-full">
                  {/* Name Input */}
                  <label className="m-0 text-lg " htmlFor="name">
                    Name:*
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    // value={values.name}
                    // onChange={handleChange}
                    required
                    className="contactFormInput mt-0.5 box-border h-[32px] w-full rounded-md border border-gray-400 p-1"
                    placeholder="Your Full Name"
                    aria-describedby="name-error"
                  />
                  <span
                    className="contactFormError block h-fit min-h-[20px] py-0.5 text-base leading-5 text-primaryDark"
                    id="name-error"
                  >
                    {/* {showError ? errors.name || "" : ""} */}
                  </span>
                </div>

                <div className="w-full">
                  {/* Phone Input */}
                  <label className="m-0 text-lg " htmlFor="phone">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    // value={values.phone}
                    // onChange={handleChange}
                    required
                    className="contactFormInput mt-0.5 box-border h-[32px] w-full rounded-md border border-gray-400 p-1"
                    placeholder="(123) 456-7890"
                    aria-describedby="phone-error"
                  />
                  <span
                    className="contactFormError block h-fit min-h-[20px] py-0.5 text-base leading-5 text-primaryDark"
                    id="phone-error"
                  >
                    {/* {showError ? errors.phone || "" : ""} */}
                  </span>

                  {/* Email Input */}
                  <div className="contactFormErrorLabelContainer">
                    <label className="m-0 text-lg " htmlFor="email">
                      Email:*
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // value={values.email}
                    // onChange={handleChange}
                    required
                    className="contactFormInput mt-0.5 box-border h-[32px] w-full rounded-md border border-gray-400 p-1"
                    placeholder="youremail@gmail.com"
                    aria-describedby="email-error"
                  />
                  <span
                    className="contactFormError block h-fit min-h-[20px] py-0.5 text-base leading-5 text-primaryDark"
                    id="email-error"
                  >
                    {/* {showError ? errors.email || "" : ""} */}
                  </span>
                </div>

                {/* Services Input */}
                <label className="m-0 text-start text-lg " htmlFor="subject">
                  What Service Are You Interested In?*
                </label>
                <select
                  name="subject"
                  id="subject"
                  // value={values.subject}
                  // onChange={handleChange}
                  className="contactFormInput mt-0.5 box-border h-[32px] w-full rounded-md border border-gray-400 p-1"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="energy_medicine">Energy Medicine</option>
                  <option value="brain_spotting">Brain Spotting</option>
                  <option value="life_guidance">Life Guidance</option>
                  <option value="general">General Inquiry</option>
                </select>
                <span
                  className="contactFormError block h-fit min-h-[20px] py-0.5 text-base leading-5 text-primaryDark"
                  id="subject-error"
                >
                  {/* {showError ? errors.subject || "" : ""} */}
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="contactFormErrorLabelContainer">
                <label className="m-0 text-lg " htmlFor="message">
                  Message:
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                rows={6}
                // value={values.message}
                // onChange={handleChange}
                required
                className="contactFormInput mt-1 box-border w-full rounded-md border border-gray-400 p-1"
                aria-describedby="message-error"
              ></textarea>
              {/* {showError && (
                <span className="contactFormError text-primaryDark text-base leading-5 block h-fit min-h-[20px] py-0.5" id="message-error">
                  {errors.message}
                </span>
              )} */}
              <span className="contactFormSubmitMessage mt-2.5 text-center text-lg">
                {/* {submitConfirm} */}
              </span>
            </div>

            {/* Submit Button */}
            <Button
              text="SEND MESSAGE"
              colorFill={true}
              rounded={true}
              onSubmit={() => console.log("submitted")}
              size="md"
              addClasses="mt-4"
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ContactModal;
