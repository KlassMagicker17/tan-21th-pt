const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.splice(0,limit);
  });

  eleventyConfig.addPassthroughCopy("src/main.css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/contact.js");

  return {
    dir: {
      input: "src"
    }
  }
};