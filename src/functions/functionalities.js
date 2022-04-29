async function request(url, method, data = null) {
  var data;
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
      body: data
    });
  }
  return data.json();
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