# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts 'Seeding users...'

u1 = User.create(first_name: "Rachel", last_name: "Humes", username: "racheljoy", password: "123", email: "racheljhumes@gmail.com", dob: Date.parse('Feb 20 1996'), income: 105000, employed?: true, employer: 'Duolingo', role: 'admin')
u2 = User.create(first_name: "Anna", last_name: "Harder", username: "annah", password: "123", email: "annah@gmail.com", dob: Date.parse('May 03 1998'), income: 105000, employed?: true, employer: 'Microsoft')



puts 'Seeding listings...'

l1 = Listing.create(creator_id: u1.id, price: 1500, footage: 650, bedrooms: 1, bathrooms: 1, description: "Second floor, bright, condo in Whitter Neighborhood near City Park with private parking spot.", date_available: Date.today,  property_owner: 'HotPads', address: '301 S Lamar St., Lakewood CO 80226')

l2 = Listing.create(creator_id: u2.id, price: 1800, footage: 586, bedrooms: 0, bathrooms: 1, description: "Studio available! Our South Broadway Apartments in Baker are the latest addition to the quickly growing neighborhood. Near the Design District, University of Denver and more, residents will enjoy a premium location near the area's main drag, along with high-end features available right at home.", date_available: Date.parse("March 08 2023"),  property_owner: 'AMLI Broadway Park', address: '357 S Bannock St., Denver CO 80223')



puts 'Seeding applications'

a1 = ListApplication.create(user_id: u1.id, listing_id: l1.id)