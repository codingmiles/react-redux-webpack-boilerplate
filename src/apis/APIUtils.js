import request from 'superagent'

function makeSimpleMethod (name) {
  const method = request[name]

  return (url) =>
    new Promise((resolve, reject) => {
      method(url)
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
}

function makePayloadMethod (name) {
  const method = request[name]

  return (url, data, headers = {}) =>
    new Promise((resolve, reject) => {
      method(url)
      .set(headers)
      .send(data)
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
}

export const httpGet = makeSimpleMethod('get')
export const httpDelete = makeSimpleMethod('delete')

export const httpPut = makePayloadMethod('put')
export const httpPost = makePayloadMethod('post')