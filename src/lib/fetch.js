export async function fetchData(url, authToken, cacheStatus = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  };

  const fetchOptions = {
    method: "GET",
    headers,
    ...cacheStatus,
  };

  if (!fetchOptions.next && !("cache" in fetchOptions)) {
    fetchOptions.next = { revalidate: 300 };
  }

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
