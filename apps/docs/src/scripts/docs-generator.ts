import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const read_dir_components_cases = () => {


  const dir = path.join(__dirname, '../lib/components/componentsCases')
  fs.promises.readdir(dir, { withFileTypes: true }).then((files) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        const component_dir = path.join(dir, file.name)
        fs.promises.readdir(component_dir, { withFileTypes: true }).then((component_files) => {
          const filesJson: Record<string, string> = {};
          const filesMap: Record<string, string> = {};
          component_files.forEach((component_file) => {

            if (component_file.isFile() && component_file.name.endsWith('.svelte')) {
              const componentFileText = fs.readFileSync(path.join(component_dir, component_file.name), 'utf-8');
              const filename = component_file.name.replace('.svelte', '');
              filesJson[filename] = componentFileText;
              filesMap[filename] = `()=>import('$lib/components/componentsCases/${file.name}/${component_file.name}')`;
            }
          })
          fs.promises.writeFile(path.join(__dirname, `../lib/components/componentsCases/${file.name}`, `${file.name}.json`), JSON.stringify(filesJson, null, 2))
          const fileMapString = 'export const componentsMap = {' + Object.entries(filesMap).map(([key, value]) => `${key}:${value}`).join(',\n') + '}';
          fs.promises.writeFile(path.join(__dirname, `../lib/components/componentsCases/${file.name}`, `${file.name}_map.ts`), fileMapString)
          // fs.promises.writeFile(path.join(__dirname, '../lib/components/componentsCases', `${file.name}_map.json`), JSON.stringify(filesMap, null, 2))
        })
      }

    })
  })
}




read_dir_components_cases();