const conversations = {
    "mom": [
      {
        "speaker": "mom",
        "message": "¡Buenos días, [Jugador]! ¿Dormiste bien?",
        "options": [
          {
            "text": "Sí",
            "next": "mom-2"
          },
          {
            "text": "No",
            "next": "mom-2"
          }
        ]
      },
      {
        "speaker": "mom",
        "message": "Hoy es un gran día para ti. Recuerda que debes hablar con el profesor Oak antes de salir.",
        "options": [
          {
            "text": "De acuerdo",
            "next": null
          }
        ]
      }
    ],
    "oak": [
      {
        "speaker": "oak",
        "message": "¡[Jugador]! Me alegra verte.",
        "options": [
          {
            "text": "Buenos días, profesor.",
            "next": "oak-2"
          }
        ]
      },
      {
        "speaker": "oak",
        "message": "¿Listo para comenzar tu aventura como entrenador Pokémon? Antes que nada, déjame presentarte a los tres Pokémon iniciales: Bulbasaur, Charmander y Squirtle.",
        "options": [
          {
            "text": "¡Genial! Quiero elegir a mi primer Pokémon.",
            "next": "oak-3"
          },
          {
            "text": "No estoy seguro...",
            "next": "oak-4"
          }
        ]
      },
      {
        "speaker": "oak",
        "message": "Excelente elección. Aquí está tu nuevo compañero.",
        "options": [
          {
            "text": "Gracias, profesor.",
            "next": null
          }
        ]
      },
      {
        "speaker": "oak",
        "message": "No te olvides de que cada Pokémon tiene sus fortalezas y debilidades. ¡Buena suerte en tu aventura!",
        "options": [
          {
            "text": "Gracias, profesor.",
            "next": null
          }
        ]
      },
      {
        "speaker": "oak",
        "message": "Bueno, [Jugador], me tengo que ir. Tengo mucho trabajo que hacer. ¡Nos vemos!",
        "options": [
          {
            "text": "¡Adiós, profesor Oak!",
            "next": null
          }
        ]
      }
    ]
  }