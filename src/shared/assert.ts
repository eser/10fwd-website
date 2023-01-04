class AssertionError extends Error {
  override name = "AssertionError";

  // constructor(message: string) {
  //   super(message);
  // }
}

const assert = (expr: unknown, msg = ""): asserts expr => {
  if (!expr) {
    throw new AssertionError(msg);
  }
};

export { assert, AssertionError };
