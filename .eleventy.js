module.exports = function (eleventyConfig){
    // copy asset folder to dist
    eleventyConfig.addPassthroughCopy('assets');

    // input and output
    return {
        dir: { input: 'src', output: 'dist'},
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };
}