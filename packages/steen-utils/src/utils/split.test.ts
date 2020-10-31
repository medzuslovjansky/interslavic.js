import {splitIterable} from "./split";

describe('splitIterable', () => {
  test.each([
    ["",  "",        []],
    ["",  "1",       ["1"]],
    ["",  "12",      ["1","2"]],
    ["x",  "",       [""]],
    ["x",  "x",      ["",""]],
    ["x",  "x1",     ["","1"]],
    ["x",  "1x",     ["1",""]],
    ["x",  "x1x",    ["","1",""]],
    ["x",  "x1x2",   ["","1","2"]],
    ["x",  "1xx2",   ["1","","2"]],
    ["x",  "1x2x",   ["1","2",""]],
    ["x",  "12xx",   ["12","",""]],
    ["xx", "",       [""]],
    ["xx", "xx",     ["",""]],
    ["xx", "xx1",    ["","1"]],
    ["xx", "1xx",    ["1",""]],
    ["xx", "xx1xx",  ["","1",""]],
    ["xx", "xx1xx2", ["","1","2"]],
    ["xx", "1xxxx2", ["1","","2"]],
    ["xx", "1xx2xx", ["1","2",""]],
    ["xx", "12xxxx", ["12","",""]]
  ])('should split with %j the string %j like this: %s', (separator: string, str: string, expected: string[]) => {
    expect([...splitIterable(str, separator)]).toEqual(expected);
  });
})

