import env from 'src/constants/env';

const baseUrl = 'https://qiita.com/api/v2';
const headers = {
  Authorization: `Bearer ${env.accessToken}`,
  'Content-Type': 'application/json',
};
const username = 'ozaki25';
const itemId = '7c780fc2e98952562fe4';

async function getUser({ userId }) {
  const res = await fetch(`${baseUrl}/users/${userId}`, { headers });
  const json = await res.json();
  console.log(json);
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function getItems() {
  const res = await fetch(`${baseUrl}/users/${username}/items`, { headers });
  const json = await res.json();
  console.log(json);
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function getComments() {
  const res = await fetch(`${baseUrl}/items/${itemId}/comments`, { headers });
  const json = await res.json();
  console.log(json);
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function getComment({ id }) {
  const res = await fetch(`${baseUrl}/comments/${id}`, {
    headers,
  });
  const json = await res.json();
  console.log(json);
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function postComment({ comment }) {
  const res = await fetch(`${baseUrl}/items/${itemId}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ body: comment }),
  });
  const json = await res.json();
  console.log(json);
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function patchComment({ id, comment }) {
  const res = await fetch(`${baseUrl}/comments/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ body: comment }),
  });
  const json = await res.json();
  console.log(json);
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function deleteComment({ id }) {
  const res = await fetch(`${baseUrl}/comments/${id}`, {
    method: 'DELETE',
    headers,
  });
  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.message);
  }
}

export default {
  getUser,
  getItems,
  getComments,
  getComment,
  postComment,
  patchComment,
  deleteComment,
};
