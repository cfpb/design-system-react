// Function to emulate pausing between interactions in Storybook tests
export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
