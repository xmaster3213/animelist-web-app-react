async function request(url, method, data = null) {
  if (data == null) {
    data = await fetch(url, {
      method: method,
      headers: { //TODO: Edit header only for auth request and save token on login/register
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhtYXN0ZXIiLCJpYXQiOjE2NTI0NTMxMTcsImV4cCI6MTY1MjQ2MDMxN30.Xa0YnkLzUfeeMJ07KH80_gfw_GETyMOSbjMWJzqSDiw'
      }
    });
  } else {
    data = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

  }
  return {
    status: data.status,
    data: data.json()
  };
}

export function get(url) {
  return request(url, 'GET');
}

export function del(url) {
  return request(url, 'DELETE');
}

export function post(url, data) {
  return request(url, 'POST', data);
}

export function put(url, data) {
  return request(url, 'PUT', data);
}