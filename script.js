//This is a JSON response sample for an API of a documentary site that shows predatory
//relations through experiments between domestic cats and fish, common housepets.
{
  "data": [{
    "type": "cats",
    "id": "2",
    "attributes": {
      "title": "Food chain education site, featuring our favorite pets!"
    },
    "links": {
      "self": "http://example.com/cats/2"
    },
    "relationships": {
      "fish": {
        "links": {
          "self": "http://example.com/cats/2/relationships/fish",
          "related": "http://example.com/cats/2/fish"
        },
        "data": { "type": "prey", "id": "6" }
      },
      "documentaries": {
        "links": {
          "self": "http://example.com/cats/2/relationships/documentaries",
          "related": "http://example.com/cats/2/documentaries"
        },
        "data": [
          { "type": "documentaries", "id": "10" },
          { "type": "documentaries", "id": "23" }
        ]
      }
    }
  }],
  "included": [{
    "type": "prey",
    "id": "6",
    "attributes": {
      "species-name": "GloFish_tetras",
      "color": "pink",
      "behavior": "swim",
      "size_inches": "3"
    },
    "links": {
      "self": "http://example.com/prey/6"
    }
  }, {
    "type": "documentaries",
    "id": "10",
    "attributes": {
      "title": "Feline hunting mechanisms, observed clearly through the lens of neon GMO fish."
    },
    "relationships": {
      "fish": {
        "data": { "type": "prey", "id": "99" }
      }
    },
    "links": {
      "self": "http://example.com/documentaries/10"
    }
  }, {
    "type": "documentaries",
    "id": "23",
    "attributes": {
      "title": "Wild coloration: The ugly path to increased survival rates."
    },
    "relationships": {
      "fish": {
        "data": { "type": "prey", "id": "6" }
      }
    },
    "links": {
      "self": "http://example.com/documentaries/23"
    }
  }]
}
