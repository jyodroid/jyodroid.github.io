import 'core-js/es6';
import 'core-js/es7/reflect';
require('core-js/client/shim.min');
require('zone.js/dist/zone');
require('reflect-metadata/Reflect.js');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
