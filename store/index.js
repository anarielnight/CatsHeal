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
      img: 'https://pp.userapi.com/c824601/v824601845/120d40/rZjpYT3bpnE.jpg'
    },
    {
      isDel: false,
      name: 'Себастьян',
      age: 5,
      weight: 5.5,
      race: RACES.KHAJIIT,
      img: 'https://pp.userapi.com/c824601/v824601845/120d51/-3Ov868FRts.jpg'
    },
    {
      isDel: false,
      name: 'Самайн',
      age: 3,
      weight: 0.1,
      race: RACES.NERUB,
      img: 'https://planetexotic.ru/wa-data/public/shop/products/07/07/707/images/2782/2782.970.jpg'
    }
  ]
})

export const mutations = {

}
