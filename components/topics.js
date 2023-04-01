import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Topics = (props) => {
  const categories = props.data.categories;
  // console.log("categoriessssssssss", categories);

  // const slider = document.querySelector("[data-slider]");
  // const sliderContainer = document.querySelector("[data-slider-container ref={sliderContainer}]");
  // const sliderPrevBtn = document.querySelector("[data-slider-prev]");
  // const sliderNextBtn = document.querySelector("[data-slider-next ref= {sliderNextBtn}]");

  const slider = useRef();
  const sliderPrevBtn = useRef();
  const sliderNextBtn = useRef();
  const sliderContainer = useRef();

  useEffect(() => {
    let totalSliderVisibleItems = Number(
      getComputedStyle(slider.current).getPropertyValue("--slider-items")
    );

    let totalSlidableItems =
      sliderContainer.current.childElementCount - totalSliderVisibleItems;

    let currentSlidePos = 0;

    const moveSliderItem = function () {
      sliderContainer.current.style.transform = `translateX(-${sliderContainer.current.children[currentSlidePos]?.offsetLeft}px)`;
    };

    /**
     * NEXT SLIDE
     */

    const slideNext = function () {
      const slideEnd = currentSlidePos >= totalSlidableItems;

      if (slideEnd) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }

      moveSliderItem();
    };

    sliderNextBtn.current.addEventListener("click", slideNext);

    /**
     * PREVIOUS SLIDE
     */

    const slidePrev = function () {
      if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
      } else {
        currentSlidePos--;
      }

      moveSliderItem();
    };

    sliderPrevBtn.current.addEventListener("click", slidePrev);

    /**
     * RESPONSIVE
     */
    const resizeHandler = () => {
      totalSliderVisibleItems = Number(
        getComputedStyle(slider.current).getPropertyValue("--slider-items")
      );
      totalSlidableItems =
        sliderContainer.current.childElementCount - totalSliderVisibleItems;

      moveSliderItem();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      sliderNextBtn.current?.removeEventListener("click", slideNext);
      sliderPrevBtn.current?.removeEventListener("click", slidePrev);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section
      className="topics"
      id="topics"
      aria-labelledby="topic-label"
      style={{ marginTop: 100 }}
    >
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2
              className="headline headline-2 section-title card-title"
              id="topic-label"
            >
              Hot topics
            </h2>

            <p className="card-text">
              Don't miss out on the latest news about Health tips, Finance,
              Career guide...
            </p>

            <div className="btn-group">
              <button
                className="btn-icon"
                aria-label="previous"
                data-slider-prev
                ref={sliderPrevBtn}
              >
                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
              </button>

              <button
                className="btn-icon"
                aria-label="next"
                data-slider-next
                ref={sliderNextBtn}
              >
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>

          <div className="slider" data-slider ref={slider}>
            <ul
              className="slider-list"
              data-slider-container
              ref={sliderContainer}
            >
              {categories?.map((item) => {
                let count;
                switch (item.attributes.title) {
                  case "Health":
                    count = item.attributes.articles.data.length;
                    break;
                  case "Career":
                    count = item.attributes.careers.data.length;

                    break;
                  case "Technology":
                    count = item.attributes.technologies.data.length;
                    break;
                    case "Lifestyle":
                      count = item.attributes.lifestyles.data.length;
                      break;
                  default:
                    count = 10;
                }

                return (
                  <li className="slider-item" key={item.id}>
                    <Link
                      href={`/category/${item.attributes.slug}`}
                      className="slider-card"
                    >
                      <figure
                        className="slider-banner img-holder"
                        style={{ "--width": 507, "--height": 618 }}
                      >
                        <Image
                          src={item.attributes.img}
                          width="507"
                          height="618"
                          loading="lazy"
                          alt="Sport"
                          className="img-cover"
                        />
                      </figure>

                      <div className="slider-content">
                        <span className="slider-title">
                          {item.attributes.title}
                        </span>

                        <p className="slider-subtitle">{count} Articles</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
