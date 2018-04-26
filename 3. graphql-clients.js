// curl -X POST \
// -H "Content-Type: application/json" \
// -d '{"query": "{ hello }"}' \
// http://localhost:4000/graphql

// Return object
// {"data":{"hello":"Hello world!"}}

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "http://localhost:4000/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
xhr.send(JSON.stringify({query: "{ hello }"}));
