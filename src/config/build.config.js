import yaml from 'js-yaml'
import fs from 'fs'

try {
  const config = yaml.load(fs.readFileSync('config.yml', 'utf8'))
  const content = `/* This file is generated by running "pnpm" gen from config.yml */export default ${JSON.stringify(config)};`
  fs.writeFileSync('config.ts', content);
} catch (e) {
  console.log(e)
}
