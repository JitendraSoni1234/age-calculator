import { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Form from '../components/Form';
import Icon from '/assets/images/icon-arrow.svg';
import Results from '../components/Results';
import calculateAge from '../helpers/ageCalculate';

interface FormErrors {
  [key: string]: string | null;
}

function HomePage() {
  const [results, setResults] = useState<{ [key: string]: number | null }>({});
  const handleSubmit = (res: { [key: string]: string }) => {
    const age: { [key: string]: number } = calculateAge(`${res?.year}-${res?.month}-${res?.date}`);
    setResults(age);
  };

  const handleError = (err: FormErrors) => {
    console.error(err);
  };

  return (
    <Card>
      <Form className='flex relative xl:gap-10 gap-5 border-b-2 border-custum-light-grey pb-16' onFinishFail={handleError} onSubmit={handleSubmit}>
        <Input placeholder='DD' id='date' labelText='Day' name='date' />
        <Input placeholder='MM' id='month' labelText='Month' name='month' />
        <Input placeholder='YY' id='year' labelText='Year' name='year' />
        <button
          type='submit'
          className='absolute hover:bg-custum-off-black -bottom-12 xl:right-0 right-[50%] translate-x-[50%] bg-custum-purple p-5 rounded-full w-[90px] h-[90px] flex place-items-center justify-center'>
          <img src={Icon} alt='' />
        </button>
      </Form>
      <Results {...results} />
    </Card>
  );
}

export default HomePage;
