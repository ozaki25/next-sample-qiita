const baseUrl = 'https://qiita.com/api/v2';
const accessToken = process.env.accessToken;
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

async function getItems(name = 'ozaki25') {
  try {
    const res = await fetch(`${baseUrl}/users/${name}/items`, { headers });
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log({ e });
    return e;
  }
}

async function getComments(itemId = '7c780fc2e98952562fe4') {
  try {
    const res = await fetch(`${baseUrl}/items/${itemId}/comments`, { headers });
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log({ e });
    return e;
  }
}

export default {
  getItems,
  getComments,
};
