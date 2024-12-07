export function greet(message: string) {
  return message.trim();
}

export function nameShort(params: string, max: number) {
  if (typeof params !== 'string' || typeof max !== 'number' || max < 0) {
    return 'Invalid input!';
  }
  const trimedParams = params.trim();
  const size = trimedParams.length;
  if (size <= max) {
    return trimedParams;
  }
  return trimedParams.substring(0, max) + '...';
}
