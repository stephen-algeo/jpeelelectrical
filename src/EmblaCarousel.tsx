import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    img: "./images/reviews/iceass71.png",
    url: "https://www.google.com/maps/contrib/114985436950553034707/reviews?hl=en-GB",
    name: "iceass71",
    extra: "(13 reviews)",
    text: "Jason replaced two lights in our bathroom. A great job and at a very reasonable price.",
    size: "xxlarge",
  },
  {
    img: "./images/reviews/dan-batty.png",
    url: "https://www.google.com/maps/contrib/109672253521631931156/reviews?hl=en-GB",
    name: "Dan Batty",
    extra: "(1 review)",
    text: "Upon discovering some potential problems with the wiring in the house, I called Jason... and was not disappointed! Jason is punctual, professional and very knowledgeable. He gave a accurate diagnosis of the problem (without all the jargon) and deal with things very quickly indeed. I'd definitely recommend Jason; honest and professional.",
    size: "large",
  },
  {
    img: "./images/reviews/lesley.png",
    url: "https://www.google.com/maps/contrib/100856669946178817270/reviews?hl=en-GBlesley",
    name: "Lesley Griffiths",
    extra: "(6 reviews)",
    text: "Jason from J Peel Electrical, offered a great service fitting outside lighting and power. From quote to delivery, the service was honest, quick and reliable. The type of worker that the job gets done to quote and not time too, so no extras. I would recommend this company.",
    size: "xlarge",
  },
  {
    img: "./images/reviews/gemma.png",
    url: "https://www.google.com/maps/contrib/115063301363993479819/reviews?hl=en-GB",
    name: "Gemma Sykes",
    extra: "(2 reviews)",
    text: "Jason has completed a number of electrical works for me over the past few years. Always reliable, communicates well. Never had any problems with work completed. Would recommend",
    size: "xlarge",
  },
  {
    img: "./images/reviews/charlie.png",
    url: "https://www.google.com/maps/contrib/104621888698995360585/reviews?hl=en-GB",
    name: "Charlie Wells",
    extra: "(3 reviews)",
    text: "Jason recently installed 12 spotlights in my home, and I couldn’t be more happy with the outcome. From the beginning, Jason communicated effectively. He completed the installation quickly and worked independently, ensuring that everything was done to a high standard. The results look fantastic! We anticipate needing more electrical work in the future, and we will definitely reach out to Jason again. I highly recommend contacting him for any electrical needs you may have. Cheers Jason!",
    size: "asfgsdf",
  },
];

const EmblaCarousel: React.FC = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  console.warn(slides);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="review">
                <div className="review-header">
                  <img
                    src={slide.img}
                    alt={`Google Review User: ${slide.name}`}
                  />
                  <div className="review-user">
                    <a href={slide.url}>{slide.name}</a>
                  </div>
                  <div className="review-info">{slide.extra}</div>
                </div>
                <div className={`review-text ${slide?.size ?? ""}`}>
                  {slide.text}
                </div>
                <div className="review-stars">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
