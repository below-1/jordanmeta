import octo from '$src/octo';

export async function getActivities() {
  const response = await octo.request("GET /users/below-1/events/public", {
    per_page: 15
  });
  const activities = response.data;
  return activities;
}
