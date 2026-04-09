import { IoStar } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";



const Card = ({ card }) => {

  return (
    <Link to={`/apps/${card.id}`}>
      <div className="text-center flex flex-col  p-4 w-full bg-white rounded-2xl shadow-md">
        <div className="flex-1">
          <img
            className="object-cover rounded-xl mx-auto"
            src={card.image}
            alt=""
          />
        </div>
        <div className="">
          <h3 className="my-4 text-xl font-medium">{card.title}</h3>
          <div className="flex items-center gap-1 justify-between">
            <div className="bg-[#F1F5E8] px-2.5 rounded-sm py-1.5 text-[#00D390] font-medium flex items-center gap-1">
              <MdOutlineFileDownload />
              <p>{card.downloads}</p>
            </div>
            <div className="bg-[#F1F5E8] px-2.5 rounded-sm py-1.5 text-[#FF8811] font-medium flex items-center gap-1">
              <IoStar className="text-lg" />
              <p>{card.ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
