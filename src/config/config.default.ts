export default {
  listen: {
    port: 8000,
  },
  apollo: {
    autoSchemaFile: true,
    debug: false,
    tracing: true,
    playground: {
      settings: {
        'request.credentials': 'include',
      },
    },
    sortSchema: true,
  },
};
