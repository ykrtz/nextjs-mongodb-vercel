This repo is for deploying your next.js App in Seconds using vercel

1. Go to vercel.com create a new project using this repo.
2. Set your Mongo DB Connection String as Enviroment Variable:  MONGODB_URI     mongodb+srv://name:password@cluster...
3. Deploy


You can test the MongoDB and API in your Browser Console or using Tools like Postman.

fetch('https://yourverceldomain/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2',
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
