
async function jsonRequest(path, options = {}) {
  const result = await fetch(path, {
    ...options,
    headers: { ...options.headers, Accept: 'application/json' },
  });
  const json = await result.json();
  if (result.status !== 200) {
    throw Object.assign(new Error(), json);
  }
  return json;
}

export default {
  async post(urlImage) {
    const urlo = `${FileSystem.documentDirectory}photos/${urlImage}`;
    let data = new FormData();
    data.append('picture', {uri: urlo, name: 'selfie.jpg', type: 'image/jpg'});
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data;',
        'image': 'holi',
      },
      body: data,
    };
    return jsonRequest(`http://172.20.3.81:5002/recognition`);
  },
};
