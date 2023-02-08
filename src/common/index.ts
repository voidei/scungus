import { Console } from 'console';
import { stderr, stdout } from 'process';

export const c = new Console(stdout, stderr);
