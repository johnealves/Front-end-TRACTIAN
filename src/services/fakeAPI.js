const assetsAPI = () => {
  return fetch('https://my-json-server.typicode.com/tractian/fake-api/assets')
    .then(resp => resp.json())
    .then(result => result)
    .catch(error => console.log(error))
}

export default assetsAPI;