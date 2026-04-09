import { Link } from "react-router";
import ErrorImage from "../../assets/images/error-404.png";
const NotFound = () => {
  return (
    <div className="w-full max-w-360 mx-auto flex justify-center flex-col min-h-screen text-center">
      <div className="">
        <img className="mx-auto" src={ErrorImage} alt="Error 404" />
      </div>
      <div className="">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Oops, page not found!
        </h2>
        <p className="text-xl text-[[#627382] my-2">
          The page you are looking for is not available.
        </p>
      </div>
      <Link
        to="/"
        className="btn w-fit mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
