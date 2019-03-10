// Destructuring: Allow us to extract multiple elements from an array.

const user = ['Jeff', '@jeffrysteven', '@jeffry_steven', '@jeffry__steven']

/* const name = user[0]
const github = user[1]
const twitter = user[2]
const instagram = user[3] */

const [name, github, twitter, instagram] = user

const csv = 'Colombia, Antioquia, Medellín, Aguacatala'
const [country, state, city, du] = csv.split(',')