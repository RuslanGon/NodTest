const parseNumber = (unknow, defaultNumber) => {
if(typeof unknow !== 'string')return defaultNumber;
};


export const parsePaginationParams = (query) => {
const { page, perPage } = query;

return {
    page: parseNumber(page, 1),
    perPage: parseNumber(perPage, 5) };
};
