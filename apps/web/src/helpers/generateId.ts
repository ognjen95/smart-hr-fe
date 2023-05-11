export const generateId = (): string => {
  let id = "";
  if (typeof window !== "undefined") {
    id = window.crypto?.randomUUID();
  }
  if (!id) {
    id = Math.random().toString(36).substring(2, 15).toString();
  }
  return id;
};
