hexo.extend.filter.register('before_post_render', function (data) {
    if (data.source.endsWith("md") && data.content.indexOf("```mermaid") !== -1) {
        data.content = data.content.replace(/(```mermaid)[\s]*(.*)([\s\S]*?)(```)/g, '{% mermaid $2 %}$3{% endmermaid %}');
    }
}, 9);