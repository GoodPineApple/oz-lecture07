let state = { status: "idle", items: [] };

function render() {
  if (state.status === "loading") return "불러오는 중…";
  if (state.status === "error") return "다시 시도";
  if (state.items.length === 0) return "결과 없음";
  return `${state.items.length}개`;
}

console.log(render());
state = { status: "loading", items: [] };
console.log(render());
state = { status: "success", items: ["라떼", "모카"] };
console.log(render());
state = { status: "error", items: ["라떼", "모카"] };
console.log(render());
state = { status: "success", items: [] };
console.log(render());
