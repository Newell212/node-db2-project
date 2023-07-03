// STRETCH
const cars = [
    {
        vin: 'JH4DB1671NS000248',
        make: 'toyota',
        model: 'camry',
        mileage: 125000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3C3CFFCR7CT272159',
        make: 'toyota',
        model: 'corolla',
        mileage: 175000,
        title: 'salvage',
    },
    {
        vin: '5FNRL38679B039269',
        make: 'ford',
        model: 'f150',
        mileage: 5000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
