import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['zh-CN'] },
    'pagePath': "zh-CN/plugins/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "zh-CN/plugins/index.html",
    'title': "插件",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>插件</h1>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(React.Fragment, { key: ".0" },
            React.createElement("script", { src: "https://cdn.pagic.org/vconsole@3.3.4/dist/vconsole.min.js" }),
            React.createElement("script", { dangerouslySetInnerHTML: {
                    __html: 'var vConsole = new VConsole();'
                } })),
        React.createElement("script", { src: "/i18n.js", type: "module" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null,
    'language': {
        "code": "zh-CN",
        "name": "简体中文",
        "path": "zh-CN/"
    },
    'contentTitle': React.createElement("h1", { key: "0" }, "\u63D2\u4EF6"),
    'contentText': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'date': "2020-10-10T02:57:18.000Z",
    'updated': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'blog': {
        "isPost": false,
        "isPosts": false,
        "posts": [
            {
                "pagePath": "zh-CN/blog/test.md",
                "title": "Test",
                "link": "zh-CN/blog/test.html",
                "date": "2020-10-10T02:57:18.000Z",
                "updated": null
            }
        ]
    }
};
