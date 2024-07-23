const parseIntFilter = (unknown) => {
    if (typeof unknown !== 'string') return undefined;
    const parsed = parseInt(unknown, 10);
    return isNaN(parsed) ? undefined : parsed;
  };

  export const parseFilters = (query) => {
    const {
      minAge,
      maxAge,
      minAvgMark,
      maxAvgMark,
      gender,
      onDuty
    } = query;

    return {
      minAge: parseIntFilter(minAge),
      maxAge: parseIntFilter(maxAge),
      minAvgMark: parseIntFilter(minAvgMark),
      maxAvgMark: parseIntFilter(maxAvgMark),
      gender: gender,
      onDuty: onDuty === 'true' || onDuty === 'false' ? onDuty === 'true' : undefined
    };
  };
