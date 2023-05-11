import React, { useRef, useState } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string | null;
}

interface FormProps {
  onSubmit: (values: FormValues) => void;
  onFinishFail: (err: FormErrors ) => void;
  children: React.ReactNode;
  className: string;
}

interface InputProps {
  name: string;
  labelText?: string;
  placeholder?: string;
  value?: string;
  error?: string | null;
  onChange?: (name: string, value: string) => void;
}

function Form({ onSubmit, children, onFinishFail, className }: FormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    const values: FormValues = {};
    const newErrors: FormErrors = {};
    const totalItems: number = form?.elements?.length || 0;

    for (let i = 0; i < totalItems; i++) {
      const element = form?.elements[i] as HTMLInputElement;
      if (element.name) {
        if (element.value.trim() === '') {
          newErrors[element.name] = `${element.name} is required`;
        } else {
          values[element.name] = element.value;
        }
      }
    }

    setErrors(newErrors);
    if (!Object.values(newErrors).some(error => error !== null)) {
      onSubmit(values);
    } else {
      onFinishFail(newErrors);
    }
  };

  const handleChange = (name: string, value: string) => {
    if (value.trim() === '') {
      setErrors(prevErrors => ({ ...prevErrors, [name]: `${name} is required` }));
    }
    if (value.trim() !== '') {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className} ref={formRef}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<InputProps>, {
            error: errors[child.props.name],
            onChange: (name: string, value: string) => handleChange(name, value),
          });
        }
        return child;
      })}
    </form>
  );
}

export default Form;
