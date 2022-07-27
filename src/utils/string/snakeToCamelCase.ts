export const snakeToCamelCase = (str: string) => str
    .replace(/([-_])([a-zA-Z])/g, (group, $1, $2) => $2
        .toUpperCase());
