import fs from 'fs-extra';
import { Eta } from "eta"
const eta = new Eta();

const input = await fs.readFile('index.eta', 'utf8');
const output = eta.renderString(input);
const dest = 'public/index.html';
await fs.outputFile(dest, output);