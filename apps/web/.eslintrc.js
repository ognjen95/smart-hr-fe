module.exports = {
  root: true,
  extends: ["custom", "plugin:@next/next/recommended"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        pathGroups: [
          {
            pattern:
              "~{assets,public,components,common,config,features,hoc,hooks,icons,layouts,pages,styles,services,context}/**",
            group: "external",
            position: "after",
          },
        ],
        groups: ["builtin", "external", ["sibling", "parent"]],
      },
    ],
  },
};
