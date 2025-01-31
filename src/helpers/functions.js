export const ApiFetch = async () => {
    debugger
    try {
        const response = await fetch(
            "https://krds-assignment.github.io/aoc/api-assets/data.json"
        );
        const result = await response.json();
        return result;
    } catch (error) {

        console.error("Error fetching data:", error);
    }
};

export const carouselResponsiveItems = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

    export const backGroundColors = [
      "rgb(65 202 110)",
      "rgb(250 177 83)",
      "rgb(114 119 213)",
      "rgb(248 125 81)",
      "rgb(237 84 102)",
      "rgb(78 194 231)",
    ];