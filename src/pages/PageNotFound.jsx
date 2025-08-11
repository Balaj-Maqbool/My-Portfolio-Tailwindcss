import { X } from "lucide-react";
import { RxDividerVertical } from "react-icons/rx";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      {/* Page metadata for SEO */}
      <Helmet>
        <title>404 | Page Not Found - Balaj Maqbool</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on Balaj Maqbool's portfolio."
        />
      </Helmet>

      {/* Full-screen centered error message */}
      <div className='min-h-screen bg-background min-w-screen flex items-center justify-center text-2xl font-bold text-gray-400'>
        <div className='flex items-center h-auto w-auto'>
          {/* Cross icon */}
          <X className="size-9 sm2:size-10 lg:size-12 text-accent font-bold" />

          {/* 404 Error Code */}
          <span className="text-[1.4rem] sm:text-[1.5rem] md:text-2xl lg:text-3xl">404</span>

          {/* Divider */}
          <RxDividerVertical color='white' size={50} />

          {/* Error message text */}
          <span className="text-[1.2rem] sm:text-[1.5rem] md:text-2xl lg:text-3xl">Page Not Found !</span>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
