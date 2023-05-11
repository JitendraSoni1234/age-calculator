type cardProps = {
  children: React.ReactNode;
};

const Card: React.FC<cardProps> = ({ children }) => {
  return <div className='bg-white shadow-xl h-[80vh] w-[90vw] 2xl:w-[40vw] rounded-[30px] xl:p-20 p-5 rounded-br-[200px] xl:rounded-br-[300px] flex flex-col'>{children}</div>;
};

export default Card;
