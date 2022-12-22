import { LinkList } from "./LinkList";

describe("linke size is 2", function () {
  it("size", function () {
    let result = new LinkList(5, 2);
    expect(result.Size).toBe(2);
  });
});

describe("init with nothing", function () {
  it("init", function () {
    let result = new LinkList();
    expect(result).toBeInstanceOf(LinkList);
  });
});
