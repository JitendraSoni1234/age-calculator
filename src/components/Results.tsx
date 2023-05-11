interface Results {
  year?: string | null;
  day?: string | null;
  month?: string | null;
}

function Results({ year, day, month }: Results) {
  return (
    <div className='pt-14 italic xl:text-7xl text-6xl font-semiBold'>
      <div className="mb-4">
        <span className="text-custum-purple">{year || '--'}</span> years
      </div>
      <div className="mb-4">
        <span className="text-custum-purple">{month || '--'}</span> months
      </div>
      <div>
        <span className="text-custum-purple">{day || '--'}</span> days
      </div>
    </div>
  );
}

export default Results;
