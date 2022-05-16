async function _request(url, method, token, data = null) {
  if (data == null) {
    // GET request
    data = await fetch(url, {
      method: method,
      headers: {
        'x-access-token': token
      }
    });
  } else {
    // POST request
    data = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(data)
    });

  }
  return {
    ok: data.ok,
    status: data.status,
    data: data.ok ? data.json() : null
  };
}

// Return obj {
//  ok = boolean; True if response status was >= 200 and < 300, False otherwise
//  data = obj; Json obj if ok == True, null if ok == False
// }
export function get(url, token = null) {
  return _request(url, 'GET', token);
}

// Return obj {
//  ok = boolean; True if response status was >= 200 and < 300, False otherwise
//  data = obj; Json obj if ok == True, null if ok == False
// }
export function del(url, token = null) {
  return _request(url, 'DELETE', token);
}

// Return obj {
//  ok = boolean; True if response status was >= 200 and < 300, False otherwise
//  data = obj; Json obj if ok == True, null if ok == False
// }
export function post(url, data, token = null) {
  return _request(url, 'POST', token, data);
}

// Return obj {
//  ok = boolean; True if response status was >= 200 and < 300, False otherwise
//  data = obj; Json obj if ok == True, null if ok == False
// }
export function put(url, data, token = null) {
  return _request(url, 'PUT', token, data);
}