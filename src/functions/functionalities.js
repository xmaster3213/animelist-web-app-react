async function request(url, method, data = null) {
  if (data == null) {
    data = await fetch(url, {
      method: method
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