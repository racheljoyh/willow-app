# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts 'Seeding users...'

u1 = User.create(first_name: "Rachel", last_name: "Humes", username: "racheljoy", password: "123", email: "racheljhumes@gmail.com", dob: Date.parse('Feb 20 1996'), income: 105000, employed?: true, employer: 'Duolingo', role: 'admin')



puts 'Seeding listing info'

l_i1 = ListingInfo.create(footage: 650, bedrooms: 1, bathrooms: 1, description: "Second floor, bright, condo in Whitter Neighborhood near City Park with private parking spot.", date_available: Date.today,  property_owner: 'HotPads', street: '2100 N Franklin St.', city: 'Denver', state: 'CO', zip: '80205')


puts 'Seeding listings...'

l1 = Listing.create(image: "https://photos.zillowstatic.com/fp/d40fd6f7ae1737918c6e32d7ea80a7b7-uncropped_scaled_within_1536_1152.webp", price: 1500, listing_info_id: l_i1.id)



puts 'Seeding applications'

a1 = ListApplication.create(user_id: u1.id, listing_id: l1.id)