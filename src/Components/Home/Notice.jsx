import Marquee from "react-fast-marquee";

export default function Notice() {
  return (
    <div>
      <Marquee
        direction="right"
        pauseOnHover="true"
        className="text-[18px] text-white font-normal black_bg py-1.5 lg:py-3 dark:text-secondary "
      >
        Realtor website templates * AI integration * E-mail marketing * IDX
        integration * Social media management * Digital marketing * 24/7
        customer support * Task management * Realtor website templates * AI
        integration * E-mail marketing * IDX integration * Social media
        management * Digital marketing * 24/7 customer support * Task managent
      </Marquee>
      <Marquee
        pauseOnHover="true"
        className="text-[18px] text-white font-normal red_bg  py-1.5 lg:py-3 dark:text-secondary "
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
