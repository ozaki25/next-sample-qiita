const baseUrl = 'https://qiita.com/api/v2';
const accessToken = process.env.accessToken;
const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};
const username = 'ozaki25';
const itemId = '7c780fc2e98952562fe4';

async function getItems() {
  const res = await fetch(`${baseUrl}/users/${username}/items`, { headers });
  const json = await res.json();
  console.log(json);
  if (res.ok) {
    return json;
  } else {
    throw new Error(json.message);
  }
}

async function getComments() {
  const res = await fetch(`${baseUrl}/items/${itemId}/comments`, { headers });
  const json = await res.json();
  console.log(json);
  if (res.ok) {
    return json;
  } else {
    throw new Error(json.message);
  }
}

async function postComment({ comment }) {
  const res = await fetch(`${baseUrl}/items/${itemId}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ body: comment }),
  });
  const json = await res.json();
  console.log(json);
  if (res.ok) {
    return json;
  } else {
    throw new Error(json.message);
  }
}

export default {
  getItems,
  getComments,
  postComment,
};
