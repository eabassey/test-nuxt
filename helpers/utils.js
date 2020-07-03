

export function transformInputs(inputs, variables) {
    return Object.entries(inputs).reduce((acc, [key, value]) => {
        if (value === '$var') {
            return {
                ...acc,
                [key]: variables[key]
            }
        } else {
            return {...acc, [key]: value}
        }
    }, {});
};