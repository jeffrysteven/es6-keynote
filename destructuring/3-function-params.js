// ES5: 
function fetch(endpoint, method, body) {
    method = method || 'GET'
    try {
      return fetch(this.baseURL + endpoint, { method: method, body: body })
    } catch (error) {
      throw new Error(error)
    }
}

fetch('/me', 'GET', null)

// ES6 <3
function fetch({ endpoint, method = 'GET', body = null }) {
    try {
      return fetch(`${this.baseURL}${endpoint}`, { method, body })
    } catch (error) {
      throw new Error(error)
    }
}

fetch({ endpoint: '/me'})