const RACES = {
  KHAJIIT: 'Каджит',
  VORGEN: 'Ворген',
  NERUB: 'Нерубианец'
}

export const state = () => ({
  pets: [
    {
      isDel: false,
      name: 'Белла',
      age: 0.75,
      weight: 2.5,
      race: RACES.KHAJIIT,
      img: '_nuxt/img/Bella.fce62e2.jpg'
    },
    {
      isDel: false,
      name: 'Себастьян',
      age: 5,
      weight: 5.5,
      race: RACES.KHAJIIT,
      img: '_nuxt/img/Seba.02d88a5.jpg'
    },
    {
      isDel: false,
      name: 'Самайн',
      age: 3,
      weight: 0.1,
      race: RACES.NERUB,
      img: '_nuxt/img/Sami.5cb806f.jpg'
    }
  ]
})

export const mutations = {

}
