Part 1 

https://swapi.dev/api/people/4

https://swapi.dev/api/planets?search=Alderaan

https://swapi.dev/api/starships/?search=falcon

https://swapi.dev/api/species/2/

https://swapi.dev/api/people/10/?search=films

https://swapi.dev/api/starships/?search=falcon




Part 2

The post request is expecting a string value to be sent over.

The get request returns an array of json objects.

https://practiceapi.devmountain.com/api/posts?id=555

code 200, code 409

{
    "id": 84,
    "text": "Neal Dooley",
    "date": "13 Jul 2022"
  }
https://practiceapi.devmountain.com/api/posts?id=84


{
    "id": 84,
    "text": "black",
    "date": "13 Jul 2022"
  }
https://practiceapi.devmountain.com/api/posts?id=84


https://practiceapi.devmountain.com/api/posts/filter?text=blue


content-type: application/json; charset=utf-8


Request was missing req.query.id or req.body.text


The Get request has no method to filter, so /posts/ will return all of the entire array of body objects. 
