/**
 * Recursively merges the properties of a source object into a target object.
 * Nested objects are merged recursively instead of being replaced by a
 * shallow assignment. Arrays and non-object values from the source replace
 * the corresponding values in the target.
 *
 * @param {Object} target The object to merge values into. It is mutated.
 * @param {Object} source The object whose values are merged into the target.
 * @returns {Object} The mutated target object containing the merged values.
 */
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

describe('deepMerge', () => {
  test('merges simple, non-nested properties', () => {
    const target = { name: 'Ada', age: 36 };
    const source = { age: 37, language: 'JavaScript' };

    expect(deepMerge(target, source)).toEqual({
      name: 'Ada',
      age: 37,
      language: 'JavaScript',
    });
  });

  test('recursively merges objects several levels deep', () => {
    const target = {
      settings: {
        editor: {
          theme: 'light',
          font: {
            family: 'serif',
          },
        },
      },
    };
    const source = {
      settings: {
        editor: {
          font: {
            size: 16,
          },
          autosave: true,
        },
      },
    };

    expect(deepMerge(target, source)).toEqual({
      settings: {
        editor: {
          theme: 'light',
          font: {
            family: 'serif',
            size: 16,
          },
          autosave: true,
        },
      },
    });
  });
});
