import { useState, useCallback } from "react";
import type { FormEvent } from "react";
import { z } from "zod";

//. TO USE THIS HOOK:
// - import "useFormAndValidation" and interface "FormValues"
// - create submitCallback to handle submit logic, create initial fields object with all fields & initial values
// - destructure all return values in your form component, passing initial fields object and submit callback to hook
// - control all inputs with values."input name"
// - add onChange={handleChange} for all inputs
// - submitted can be used to display confirmation message and optionally disable submit button
// - isValid can be used to set button state
// - set error spans as:
{
  /* <span className="contact-form__error" id="name-error">
  {showError ? errors.name || "" : ""}
  </span> */
}
// - be sure to add "aria-describedby={errorId}" for each field for screen readers

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "Please enter a valid phone number",
    ),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/,
      "Password must include an uppercase letter, a symbol, and be at least 8 characters long",
    ),
});

export type FormValues = z.infer<typeof formSchema>;

type FormErrors = Record<string, string>;

export const useFormAndValidation = (
  initialFields: FormValues,
  submitCallback: (formData: FormValues) => void,
) => {
  const [values, setValues] = useState<FormValues>(initialFields);
  const initialErrors: FormErrors = Object.keys(initialFields).reduce(
    (acc, key) => {
      acc[key] = "Please fill out this field.";
      return acc;
    },
    {} as FormErrors,
  );
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    // Validate using Zod schema
    try {
      formSchema.shape[name as keyof FormValues].parse(value);
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: (error as z.ZodError).errors[0]?.message ?? "Invalid value",
      }));
    }

    setValues((prev) => ({ ...prev, [name]: value }));
    setIsValid(e.target.closest("form")?.checkValidity() ?? false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parseResult = formSchema.safeParse(values);
    if (parseResult.success) {
      submitCallback(parseResult.data);
      setShowError(false);
      resetForm();
    } else {
      setShowError(true);
      const newErrors: FormErrors = {};
      parseResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0]] = err.message;
        }
      });
      setErrors(newErrors);
    }
  };

  const resetForm = useCallback(() => {
    setValues(initialFields);
    setErrors(initialErrors);
    setIsValid(false);
    setShowError(false);
  }, [initialFields, initialErrors]);

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    isValid,
    showError,
    resetForm,
  };
};
