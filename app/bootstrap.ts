import path from 'path';
import moduleAlias from 'module-alias';
import { config } from 'dotenv';

let envPath: string = path.resolve(process.cwd());
envPath += '/.env';

config({ path: envPath });
moduleAlias.addAlias('@app', __dirname);
