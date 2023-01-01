module.exports = function (eleventyConfig){
    // copy asset folder to dist
    eleventyConfig.addPassthroughCopy('assets');

    // input and output
    return {
        dir: { input: 'src', output: 'docs'},
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };
}
