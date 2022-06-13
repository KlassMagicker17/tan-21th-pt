const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("githubURL", (url) => {
    return `https://klassmagicker17.github.io/tan-21th-pt${url}`
  });

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.splice(0,limit);
  });

  eleventyConfig.addPassthroughCopy("src/main.css");
  eleventyConfig.addPassthroughCopy("src/animation.css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/animate.js");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
};