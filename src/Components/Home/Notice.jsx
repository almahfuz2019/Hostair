
import Marquee from "react-fast-marquee";

export default function Notice() {
  return (
    <div>
      <Marquee
        direction="right"
        pauseOnHover="true"
        className="text-[18px] font-normal bg-[#2B2B2E] py-3 text-secondary"
      >
        Realtor website templates * AI integration * E-mail marketing * IDX
        integration * Social media management * Digital marketing * 24/7
        customer support * Task management * Realtor website templates * AI
        integration * E-mail marketing * IDX integration * Social media
        management * Digital marketing * 24/7 customer support * Task managent
      </Marquee>
      <Marquee
        pauseOnHover="true"
        className="text-[18px] font-normal bg-primary py-3 text-secondary"
      >
        Realtor website templates * AI integration * E-mail marketing * IDX
        integration * Social media management * Digital marketing * 24/7
        customer support * Task management * Realtor website templates * AI
        integration * E-mail marketing * IDX integration * Social media
        management * Digital marketing * 24/7 customer support * Task managent
      </Marquee>
    </div>
  );
}
