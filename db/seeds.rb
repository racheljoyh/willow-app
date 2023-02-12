# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts 'Clearing db...'
User.destroy_all
Listing.destroy_all
ListApplication.destroy_all


puts 'Seeding users...'

u1 = User.create(first_name: "Rachel", last_name: "Humes", username: "racheljoy", password: "123", email: "racheljhumes@gmail.com", dob: Date.parse('Feb 20 1996'), income: 105000, employed?: true, employer: 'Duolingo', role: 'admin')
u2 = User.create(first_name: "Anna", last_name: "Harder", username: "annah", password: "123", email: "annah@gmail.com", dob: Date.parse('May 03 1998'), income: 105000, employed?: true, employer: 'Microsoft')



puts 'Seeding listings...'

l1 = Listing.create(creator_id: u1.id, price: 1655, footage: 685, bedrooms: 1, bathrooms: 1, description: "Set amongst the legends and histories of Denver's Capitol Hill, your new Story brings the character of our neighborhoodwith all its music, art, and tasteright to your front door.", date_available: Date.parse("March 23 2023"),  property_owner: 'Red Peak', address: '990 Logan St, Denver, CO 80203')

l1_image_1 = File.open(Rails.root.join('db/images/l1_images/9aabca900c6a5a1fd054590471662e1d-cc_ft_384.png'))
l1_image_2 = File.open(Rails.root.join('db/images/l1_images/22351e1ed541e65744c7b3caab7bfb15-cc_ft_384.png'))
l1_image_3 = File.open(Rails.root.join('db/images/l1_images/a79eb1b9d77f186b53ff8bc50f22f506-cc_ft_384.png'))
l1_image_4 = File.open(Rails.root.join('db/images/l1_images/a1699aaf5354891f412ffbe3d962d77a-cc_ft_384.png'))
l1_image_5 = File.open(Rails.root.join('db/images/l1_images/c1b5e6ad73d9763543c4b320aa4cb265-cc_ft_384.png'))

l1.images.attach(io: l1_image_1, filename: '9aabca900c6a5a1fd054590471662e1d-cc_ft_384.png', content_type: "image/png")
  l1_image_1.rewind
l1.images.attach(io: l1_image_2, filename: '22351e1ed541e65744c7b3caab7bfb15-cc_ft_384.png', content_type: "image/png")
  l1_image_2.rewind
l1.images.attach(io: l1_image_3, filename: 'a79eb1b9d77f186b53ff8bc50f22f506-cc_ft_384.png', content_type: "image/png")
  l1_image_3.rewind
l1.images.attach(io: l1_image_4, filename: 'a1699aaf5354891f412ffbe3d962d77a-cc_ft_384.png', content_type: "image/png")
  l1_image_4.rewind
l1.images.attach(io: l1_image_5, filename: 'c1b5e6ad73d9763543c4b320aa4cb265-cc_ft_384.png', content_type: "image/png")
  l1_image_5.rewind



l2 = Listing.create(creator_id: u2.id, price: 1300, footage: 600, bedrooms: 1, bathrooms: 1, description: "Come check out this great 1 bed 1 bath apartment available now. This apartment is on the second floor and has plenty of kitchen space with a good sized room, laundry facilities in the basement.", date_available: Date.parse("March 08 2023"),  property_owner: 'Calibrate Real Estate', address: '785 N Marion St, APT 3, Denver, CO 80218')

l2_image_1 = File.open(Rails.root.join('db/images/l2_images/32aff534be3d667c25d11dbe57a8ff51-cc_ft_384.png'))
l2_image_2 = File.open(Rails.root.join('db/images/l2_images/d5eede389f52db3d1c4fb4b73f5a546b-cc_ft_384.png'))
l2_image_3 = File.open(Rails.root.join('db/images/l2_images/d7d50caab062c03ba595109c20545012-cc_ft_576.png'))
l2_image_4 = File.open(Rails.root.join('db/images/l2_images/f7c358c5331edd01f152924281a6d179-cc_ft_576.png'))

l2.images.attach(io: l2_image_1, filename: '32aff534be3d667c25d11dbe57a8ff51-cc_ft_384.png', content_type: "image/png")
  l2_image_1.rewind
l2.images.attach(io: l2_image_2, filename: 'd5eede389f52db3d1c4fb4b73f5a546b-cc_ft_384.png', content_type: "image/png")
  l2_image_2.rewind
l2.images.attach(io: l2_image_3, filename: 'd7d50caab062c03ba595109c20545012-cc_ft_576.png', content_type: "image/png")
  l2_image_3.rewind
l2.images.attach(io: l2_image_4, filename: 'f7c358c5331edd01f152924281a6d179-cc_ft_576.png', content_type: "image/png")
  l2_image_4.rewind




puts 'Seeding applications'

a1 = ListApplication.create(user_id: u1.id, listing_id: l1.id)

puts "Done!"