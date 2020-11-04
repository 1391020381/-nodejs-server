const fs = require('fs')
const { resolve } = require('path')
const dotenv = require('dotenv')

// dotenv 会获取根目录下面 .env file下面的值

const dotenvTags = [
    // 本地环境
    'development',
  
    // 测试环境
    // 比如：单元测试
    'test',
  
    // 部署环境
    // 比如：日常、预发、线上
    'production',
  ]
  if (!dotenvTags.includes(process.env.NODE_ENV)) {
    process.env.NODE_ENV = dotenvTags[0];
  }
  
  const dotenvPath = resolve('.env');
  console.log('dotenvPath:',dotenvPath)
  const dotenvFiles = [  // 一个命令行对应一个.env文件
    dotenvPath,
    `${dotenvPath}.local`,
    `${dotenvPath}.${process.env.NODE_ENV}`,
    `${dotenvPath}.${process.env.NODE_ENV}.local`,
  ].filter(fs.existsSync);
  console.log("dotenvFiles:",dotenvFiles)
  dotenvFiles
  .reverse()
  .forEach((dotenvFile) => dotenv.config({ path: dotenvFile }));

