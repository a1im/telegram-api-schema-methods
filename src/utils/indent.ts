export const indent = (items: string[], num: number) => {
    const space = Array.from({ length: num }).fill(' ').join('');

    return items
        .map((it) => `${space}${it}`);
};
