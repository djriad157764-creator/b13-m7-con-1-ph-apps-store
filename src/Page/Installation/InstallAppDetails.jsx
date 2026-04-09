import React, { useContext } from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import DownloadPng from "../../assets/images/Group.png";
import { InstallAppArray } from "../../InstalledApp/installedApp";
import { toast } from "react-toastify";

const InstallAppDetails = ({ app }) => {
  const [apps, setApps] = useContext(InstallAppArray);

  const handleUninstallBtn = () => {
    const UninstallApps = apps.filter((item) => item.title !== app.title);
    setApps(UninstallApps);
    toast.error(`${app.title} Uninstall`)
  };

  return (
    <div className="sm:flex items-center mb-4 rounded-2xl bg-base-100  justify-between">
      <div className="flex items-center gap-4">
        <div className="">
          <img className="w-20 ml-4 bg-white " src={app.image} alt="" />
        </div>
        <div className="p-7">
          <h3 className=" text-sm md:text-lg lg:text-xl font-medium mb-4">
            {app?.title}
          </h3>
          <div className="flex items-center gap-4">
            <div className="text-[#00D390] font-medium flex items-center gap-1">
              <div className="">
                <img className="w-4" src={DownloadPng} alt="" />
              </div>
              <p>{app?.downloads}</p>
            </div>
            <div className="text-[#FF8811] font-medium flex items-center gap-1">
              <div className="">
                <IoMdStar className="text-xl text-[#FF8811]" />
              </div>
              <p>{app?.ratingAvg}</p>
            </div>
            <div className="text-[#627382] font-medium flex items-center gap-1">
              <p>{app.size}</p>
              <p>MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mr-4 flex justify-center ">
        <button
          onClick={handleUninstallBtn}
          className="btn bg-[#00d390b4] text-white font-semibold"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallAppDetails;
