
import { X } from "lucide-react";
import { RxDividerVertical } from "react-icons/rx";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found - Balaj Maqbool</title>
        <meta name="description" content="The page you are looking for does not exist on Balaj Maqbool's portfolio." />
      </Helmet>

      <div className='min-h-screen bg-background min-w-screen flex items-center justify-center text-2xl font-bold text-gray-400'>
        <div className='flex items-center h-auto w-auto'>
          <X className=" size-9 sm2:size-10 lg:size-12 text-accent font-bold" />
          <span className="text-[1.4rem] sm:text-[1.5rem] md:text-2xl lg:text-3xl">404</span>
          <RxDividerVertical color='white' size={50}  />
          <span className="text-[1.2rem] sm:text-[1.5rem] md:text-2xl lg:text-3xl">Page Not Found !</span>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
