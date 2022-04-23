// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "React Crestron CH5 Hooks",
    tagline:
        "A collection of React custom hooks for Crestron CH5 project development",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Norgate AV Solutions Ltd", // Usually your GitHub org/user name.
    projectName: "react-crestron-ch5-hooks", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "React Crestron CH5 Hooks",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Tutorial",
                    },
                    // { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/Norgate-AV-Solutions/react-crestron-ch5-hooks",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    // {
                    //     title: "Docs",
                    //     items: [
                    //         {
                    //             label: "Tutorial",
                    //             to: "/docs/intro",
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: "Community",
                    //     items: [
                    //         {
                    //             label: "Stack Overflow",
                    //             href: "https://stackoverflow.com/questions/tagged/docusaurus",
                    //         },
                    //         {
                    //             label: "Discord",
                    //             href: "https://discordapp.com/invite/docusaurus",
                    //         },
                    //         {
                    //             label: "Twitter",
                    //             href: "https://twitter.com/docusaurus",
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: "More",
                    //     items: [
                    //         // {
                    //         //     label: "Blog",
                    //         //     to: "/blog",
                    //         // },
                    //         {
                    //             label: "GitHub",
                    //             href: "https://github.com/Norgate-AV-Solutions/react-crestron-ch5-hooks",
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Norgate AV Solutions Ltd`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
