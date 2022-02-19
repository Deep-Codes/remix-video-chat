/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'api/_build',
  ignoredRouteFiles: ['.*'],
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route('/meeting/*', 'meeting.tsx');
    });
  },
};
