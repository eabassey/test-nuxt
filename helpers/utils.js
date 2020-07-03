import jmesPath from 'jmespath';
import render from 'json-templater/object';
import { path, mergeDeepRight, assocPath } from 'ramda';

export const transformInputs = (inputs, variables) => {
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



/**
 * Transform a template string by replacing variables in them to generate a string. 
 * @param {string} jsonStr The template string 
 * @param {object} queryProps Key-Value pair of the template variables. The key is the name of the template variable and the value is the jmesPath query syntax.
 * @param {object} variables The part of the in-memory store holding variables to be queried.
 */
export const renderJsonString = (jsonStr, queryProps, variables) => {
    const queryResult = Object.entries(queryProps).reduce((acc, [prop, query]) => {
        return {
          ...acc,
          [prop]: jmespath.search(variables, query)
        };
      }, {});
      return render(jsonStr, queryResult);
}



/**
 * A function for transforming an object to a new shape based on a mapping rule.
 * @param {object} mapper The mapping rule for transforming to a new object. The key is the path to the old object and value is the path to the new object.
 * @param {object} inputObject The object to transform to a new shape.
 */
export const transformToShape = (mapper, inputObject) => {
    return Object.entries(mapper).reduce((acc, [formPath, storePath]) => {
      const valueExists =
        path(formPath.split('.'), inputObject) !== undefined && path(formPath.split('.'), inputObject) !== null;
      if (typeof storePath === 'string') {
        return valueExists
          ? mergeDeepRight(acc, assocPath(storePath.split('.'), path(formPath.split('.'), inputObject), {}))
          : acc;
      } else if (Array.isArray(storePath) && typeof storePath[0] === 'string') {
        return storePath.reduce((innerAcc, innerStorePath) => {
          const innerObj = valueExists
            ? mergeDeepRight(
                innerAcc,
                assocPath(innerStorePath.split('.'), path(formPath.split('.'), inputObject), {})
              )
            : innerAcc;
          return mergeDeepRight(acc, innerObj);
        }, {});
      } else if (Array.isArray(storePath) && typeof storePath[0] === 'function') {
        const [func, pathToStore] = storePath;
        const transformed = func(path(formPath.split('.'), inputObject));
        return valueExists ? mergeDeepRight(acc, assocPath(pathToStore.split('.'), transformed, {})) : acc;
      } else if (Array.isArray(storePath) && Array.isArray(storePath[0])) {
        return storePath.reduce((inner1, funcToPathArray) => {
          const [func, pathToStore] = funcToPathArray;
          const transformed = func(path(formPath.split('.'), inputObject));
          const innerObj = valueExists
            ? mergeDeepRight(inner1, assocPath(pathToStore.split('.'), transformed, {}))
            : inner1;
          // const innerObj1 = valueExists
          //   ? R.mergeDeepRight(inner1, R.assocPath(pathToStore.split('.'), R.path(formPath.split('.'), inputObject), {}))
          //   : inner1;
          return mergeDeepRight(acc, innerObj);
        }, {});
      }
    }, {});
}
      