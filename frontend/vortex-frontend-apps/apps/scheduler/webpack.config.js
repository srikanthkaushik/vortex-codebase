const {
  //shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '15.0.2' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '15.0.2' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '15.0.2' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '15.0.2' },
    "shared-lib/shared-lib-global": { singleton: true , strictVersion: false }
  }
});

// module.exports = withModuleFederationPlugin({
//   shared: {
//     ...shareAll({
//       singleton: true,
//       strictVersion: true,
//       requiredVersion: 'auto',
//     }),
//   },
// });
