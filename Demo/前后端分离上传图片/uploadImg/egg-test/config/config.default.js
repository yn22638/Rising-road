/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555466639828_8861';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

    config.security = { //取消安全验证
      csrf: {
        enable: false,
      },
      methodnoallow: {
        enable: false,
      },
      domainWhiteList: [
        'http://localhost:8080',
        'http://127.0.0.1:8080',
      ],
    }

  return {
    ...config,
    ...userConfig,
  };
};
