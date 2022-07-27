import fs from 'fs';

export const readFile = (path: string) => new Promise<Buffer>((resolve, reject) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});
