type Criteria<T> = (item: T, index: number, array: ReadonlyArray<T>) => string | number;

type GetGroupByType<T, Criterias> = Criterias extends [Criteria<T>, ...infer RestCriterias]
    ? Record<string | number, GetGroupByType<T, RestCriterias>>
    : T[];

export const groupBy = <T, C extends Criteria<T>[]>(
    items: ReadonlyArray<T>,
    ...criterias: C
): GetGroupByType<T, C> => {
    const lastCriteria = criterias.pop()!;

    return items.reduce((acc, item, index, array) => {
        let nested: Record<string | number, any> = acc;

        criterias.forEach((itCriteria) => {
            const key = itCriteria(item, index, array);

            nested[key] = nested[key] ?? {};
            nested = nested[key];
        });
        const key = lastCriteria(item, index, array);
        const arr = nested[key] ?? [];

        arr.push(item);

        nested[key] = arr;

        return acc;
    }, {} as GetGroupByType<T, C>);
};
