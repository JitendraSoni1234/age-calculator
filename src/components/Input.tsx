interface InputProps {
  id: string;
  name: string;
  labelText?: string;
  placeholder?: string;
  value?: string;
  error?: string | null;
  onChange?: (name: string, value: string) => void;
}

function Input({ placeholder, id, labelText, error, name, onChange }: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(name, event.target.value);
  }
  return (
    <div className='flex flex-col gap-3 relative w-[30%] xl:w-[25%]'>
      <label className={`${error ? 'text-custum-light-red' : 'text-custum-smokey-grey'} font-semiBold`} htmlFor={id}>
        {labelText}
      </label>
      <input
        className='text-3xl border-2 border-custum-grey focus:outline-none p-4 placeholder:font-extraBold font-extraBold placeholder:text-3xl rounded-lg'
        placeholder={placeholder}
        type='number'
        id={id}
        name={name}
        onChange={handleChange}
      />
      {error ? (
        <span className='text-custum-light-red font-light absolute -bottom-10'>
          <i>{error}</i>
        </span>
      ) : ""}
    </div>
  );
}

export default Input;
