# ADVANCED BLOCKS

## **NO Support guaranteed**

### If you want to use this. Please inform you about the Basics of JS.

<details>
  <summary>Example Code for DBB-Editor</summary>
  
  ```json
  {
  "info": {
    "title": "Json Crap",
    "description": "",
    "thumbnail": ""
  },
  "blocks": [
    {
      "name": "bot_started_event",
      "info": {
        "x": 345,
        "y": 221,
        "z": 1,
        "color": "#5a5a5a",
        "height": 82,
        "width": 193
      },
      "outputs": {
        "action": [
          "wRO1IBjzXj"
        ]
      }
    },
    {
      "name": "request_webapi",
      "info": {
        "x": 816,
        "y": 265,
        "z": 2,
        "color": "#5a5a5a",
        "height": 196,
        "width": 448
      },
      "inputs": {
        "action": "wRO1IBjzXj",
        "url": "ZkdNbiO2gR",
        "header": "YTrWT4SAbK",
        "postdata": "trfPKrwNd7"
      },
      "options": {
        "type": "1"
      },
      "outputs": {
        "action": [
          "A7cT1bEVNw"
        ],
        "retdata": [
          "2zaljqpVGM",
          "s6CnsVDpem"
        ],
        "error": [
          "S9SvuwW6Km"
        ]
      }
    },
    {
      "name": "print",
      "info": {
        "x": 1334,
        "y": 196,
        "z": 3,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "A7cT1bEVNw",
        "value": "2zaljqpVGM"
      },
      "outputs": {
        "action": [
          "hV9oWbIfBm"
        ]
      }
    },
    {
      "name": "text",
      "info": {
        "x": 313,
        "y": 355,
        "z": 4,
        "color": "#5a5a5a",
        "height": 122,
        "width": 296
      },
      "options": {
        "text": "https://dog.ceo/api/breeds/image/random"
      },
      "outputs": {
        "text": [
          "ZkdNbiO2gR"
        ]
      }
    },
    {
      "name": "print",
      "info": {
        "x": 1267,
        "y": 483,
        "z": 5,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "S9SvuwW6Km",
        "value": "8XI3HyotJR"
      },
      "outputs": {
        "action": []
      }
    },
    {
      "name": "text",
      "info": {
        "x": 921,
        "y": 500,
        "z": 6,
        "color": "#5a5a5a",
        "height": 122,
        "width": 296
      },
      "options": {
        "text": "Something went wrong on the  Request :/"
      },
      "outputs": {
        "text": [
          "8XI3HyotJR"
        ]
      }
    },
    {
      "name": "print",
      "info": {
        "x": 2315,
        "y": 264,
        "z": 9,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "jMu4HZRaB5",
        "value": "sjWZEZAQBA"
      },
      "outputs": {
        "action": [
          "mLFH9QiSGo"
        ]
      }
    },
    {
      "name": "print",
      "info": {
        "x": 2315,
        "y": 479,
        "z": 10,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "l939WMfWZH",
        "value": "S8vOezkvly"
      },
      "outputs": {
        "action": []
      }
    },
    {
      "name": "text",
      "info": {
        "x": 1895,
        "y": 484,
        "z": 11,
        "color": "#5a5a5a",
        "height": 122,
        "width": 296
      },
      "options": {
        "text": "Something went wrong on the Stingify ..."
      },
      "outputs": {
        "text": [
          "S8vOezkvly"
        ]
      }
    },
    {
      "name": "parse_json",
      "info": {
        "x": 1787,
        "y": 322,
        "z": 12,
        "color": "#5a5a5a",
        "height": 144,
        "width": 410
      },
      "inputs": {
        "action": "hV9oWbIfBm",
        "input": "s6CnsVDpem"
      },
      "options": {
        "type": "2"
      },
      "outputs": {
        "action": [
          "jMu4HZRaB5"
        ],
        "output": [
          "sjWZEZAQBA",
          "JWXlmQ8uxp"
        ],
        "error": [
          "l939WMfWZH"
        ]
      }
    },
    {
      "name": "parse_json",
      "info": {
        "x": 2648,
        "y": 326,
        "z": 13,
        "color": "#5a5a5a",
        "height": 144,
        "width": 410
      },
      "inputs": {
        "action": "mLFH9QiSGo",
        "input": "JWXlmQ8uxp"
      },
      "options": {
        "type": "1"
      },
      "outputs": {
        "action": [
          "w7OWhoIWOr"
        ],
        "output": [
          "gSU7S8wrmJ",
          "ql1JNgHezz"
        ],
        "error": [
          "NQUpiwcws8"
        ]
      }
    },
    {
      "name": "print",
      "info": {
        "x": 3131,
        "y": 433,
        "z": 14,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "NQUpiwcws8",
        "value": "ECDY4K5HRv"
      },
      "outputs": {
        "action": []
      }
    },
    {
      "name": "print",
      "info": {
        "x": 3125,
        "y": 263,
        "z": 15,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "w7OWhoIWOr",
        "value": "gSU7S8wrmJ"
      },
      "outputs": {
        "action": [
          "RsGAu61JrI"
        ]
      }
    },
    {
      "name": "text",
      "info": {
        "x": 2759,
        "y": 488,
        "z": 16,
        "color": "#5a5a5a",
        "height": 122,
        "width": 296
      },
      "options": {
        "text": "Something went wrong Parsing again..."
      },
      "outputs": {
        "text": [
          "ECDY4K5HRv"
        ]
      }
    },
    {
      "name": "get_from_json",
      "info": {
        "x": 3734,
        "y": 338,
        "z": 17,
        "color": "#5a5a5a",
        "height": 144,
        "width": 281
      },
      "inputs": {
        "action": "RsGAu61JrI",
        "input": "ql1JNgHezz",
        "key": "HBTLoWaewW"
      },
      "outputs": {
        "action": [
          "55XwJ6dxul"
        ],
        "output": [
          "yZaYU1bVy1"
        ],
        "error": [
          "qNddhjpWuh"
        ]
      }
    },
    {
      "name": "text",
      "info": {
        "x": 3376,
        "y": 513,
        "z": 18,
        "color": "#5a5a5a",
        "height": 122,
        "width": 296
      },
      "options": {
        "text": "status"
      },
      "outputs": {
        "text": [
          "HBTLoWaewW"
        ]
      }
    },
    {
      "name": "print",
      "info": {
        "x": 4134,
        "y": 329,
        "z": 19,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "55XwJ6dxul",
        "value": "yZaYU1bVy1"
      },
      "outputs": {
        "action": []
      }
    },
    {
      "name": "print",
      "info": {
        "x": 4133,
        "y": 459,
        "z": 20,
        "color": "#5a5a5a",
        "height": 113,
        "width": 201
      },
      "inputs": {
        "action": "qNddhjpWuh",
        "value": "cE2Nn2hTaV"
      },
      "outputs": {
        "action": []
      }
    },
    {
      "name": "text",
      "info": {
        "x": 3731,
        "y": 506,
        "z": 21,
        "color": "#5a5a5a",
        "height": 122,
        "width": 296
      },
      "options": {
        "text": "Error by getting a Value from the Object"
      },
      "outputs": {
        "text": [
          "cE2Nn2hTaV"
        ]
      }
    }
  ],
  "notes": [
    {
      "title": "Web Request Stuff",
      "description": "",
      "color": "#d75050",
      "x": 291,
      "y": 132,
      "z": 1,
      "width": 1362,
      "height": 581
    },
    {
      "title": "Make it to a String",
      "description": "",
      "color": "#45b913",
      "x": 1758,
      "y": 143,
      "z": 2,
      "width": 777,
      "height": 494
    },
    {
      "title": "Bring back to an Object",
      "description": "",
      "color": "#2b54b6",
      "x": 2559,
      "y": 146,
      "z": 3,
      "width": 794,
      "height": 503
    },
    {
      "title": "Get an Item of the Object",
      "description": "",
      "color": "#700f49",
      "x": 3366,
      "y": 149,
      "z": 4,
      "width": 983,
      "height": 503
    }
  ]
}
  ```
  
</details>
