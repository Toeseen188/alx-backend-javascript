export default function guardrail(mathFunction) {
  const queue = [];
  const e = 'Guardrail was processed';
  try {
    queue.push(mathFunction(), e);
    return queue;
  } catch (error) {
    queue.push(`${error}`, e);
    return queue;
  }
}
