import * as React from "react";


/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createContext<A extends unknown | null>(): readonly [() => A, React.Provider<A|undefined>] {
  // create a context of type given or undefined
  const ctx = React.createContext<A | undefined>(undefined);
  // basicaly a use hook with error checking so TS works
  function useCtx(): A {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export default createContext;