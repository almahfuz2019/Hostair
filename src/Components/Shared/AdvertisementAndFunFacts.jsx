import Advertisement_Templates from "../Home/Advertisement_Templates";
import Advertisement_Services from "../Home/Advertisement_Services";
import FunFacts from "../Home/FunFacts";

export default function AdvertisementAndFunFacts() {
  return (
    <div className="pattern2 ">
      <div className="pattern3">
        <Advertisement_Templates />
        <FunFacts />
        <Advertisement_Services />
      </div>
    </div>
  );
}
