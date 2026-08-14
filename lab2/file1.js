import { appendFile } from 'fs';
import {writeFile} from 'fs/promises';

//await writeFile('Hello.txt', 'JS is awesome!');
await appendFile('Hello.txt', 'JS is awesome!');