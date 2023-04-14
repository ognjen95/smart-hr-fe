export const generateId = (): string => {
  if (typeof window !== 'undefined') {
    return window.crypto?.randomUUID();
  }
  const id = Math.random().toString(36).substring(2, 15);
  return id.toString();
};
