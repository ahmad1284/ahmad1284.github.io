module.exports = function(eleventyConfig) {
    eleventyConfig.ignores.add("./src/_sass");
    
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy({ "./src/_css/" : "/css/" });
    eleventyConfig.addPassthroughCopy({ "./src/_fonts": "/fonts" });
    eleventyConfig.addPassthroughCopy({ "./src/_public": "/" });

    return {
        dir: {
            data: "_data",
            input: "src",
            output: "docs",
            includes: "_includes",
            layouts: "_layouts",
        },
    };
};