const parseNumber = (unknow) => {

};


export const parsePaginationParams = (query) => {
const { page, perPage } = query;

return {
    page: parseNumber(page),
    perPage: parseNumber(perPage) };
};
