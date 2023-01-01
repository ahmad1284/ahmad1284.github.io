module.exports = function (eleventyConfig){
    // copy asset folder to dist
    eleventyConfig.addPassthroughCopy('assets');

    // input and output
    return {
        dir: { input: 'src'},
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };
}
