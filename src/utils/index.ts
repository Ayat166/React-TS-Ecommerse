export function splitString(str: string, index: number = 50): string {
    if (index < str.length) {
        return str.substring(0, index) + ("...");
    }
  return str;
}