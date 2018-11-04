const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Celebrity = require('../models/celebrity');
// const Publisher = require('../models/publisher');

const celebritys = [
    {
        name: 'Ayrton Senna',
        occupation: 'Racing driver',
        catchPhrase: 'He (God) is the owner of everything. I owe him the opportunity I had to get where I am. Many people have the ability, but they do not have the opportunity. He gave it to me, I do no know why. I only know that I can not waste it.'
    },
    {
        name: 'Pelé',
        occupation: 'Footballer',
        catchPhrase: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do'
    },
    {
        name: 'Bruce Lee',
        occupation: 'Martial Artist',
        catchPhrase: 'Do not pray for an easy life, pray for the strength to endure a difficult one.'
    }
]


Celebritys.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebritys.length} celebritys`)
    mongoose.connection.close()
})