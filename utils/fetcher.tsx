export const fetcher = (url: string, data: any) => {
  fetch(window.location.origin + url, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res.json())
}
