export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify deploys",
        sites: [
          {
            title: "Website",
            apiId: "668bdafb-52b2-48e1-8849-8db1c8d204dd",
            buildHookId: "5f9b7b0d4b8985431819911a",
            name: "alexandrabrown",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Recently edited pages",
        order: "_updatedAt desc",
        limit: 5,
        types: ["page"],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Recently edited work",
        order: "_updatedAt desc",
        limit: 5,
        types: ["work"],
      },
    },
  ],
};
