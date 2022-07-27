import { readFile } from './readFile';

export const readJSONFile = async <T = any>(path: string): Promise<T> => {
    const file = await readFile(path);

    return JSON.parse(file.toString('utf8')) as any;
};
