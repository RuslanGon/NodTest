const parseNumber = (unknown, defaultNumber) => {
if(typeof unknown !== 'string')return defaultNumber;
const parsedNumber = parseInt(unknown, 10);

if(Number.isNaN(parsedNumber)) return defaultNumber;
return parseNumber;
};


export const parsePaginationParams = (query) => {
const { page, perPage } = query;

return {
    page: parseNumber(page, 1),
    perPage: parseNumber(perPage, 5) };
};
