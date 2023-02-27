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

l1 = Listing.create(creator_id: u1.id, price: 1655, footage: 685, bedrooms: 1, bathrooms: 1, description: "Set amongst the legends and histories of Denver's Capitol Hill, your new Story brings the character of our neighborhoodwith all its music, art, and tasteright to your front door.", date_available: Date.parse("March 23 2023"),  property_owner: 'Red Peak', address: '990 Logan St, Denver, CO 80203')

# l1_image_1 = File.open(Rails.root.join('db/images/l1_images/9aabca900c6a5a1fd054590471662e1d-cc_ft_384.png'))
# l1_image_2 = File.open(Rails.root.join('db/images/l1_images/22351e1ed541e65744c7b3caab7bfb15-cc_ft_384.png'))
# l1_image_3 = File.open(Rails.root.join('db/images/l1_images/a79eb1b9d77f186b53ff8bc50f22f506-cc_ft_384.png'))
# l1_image_4 = File.open(Rails.root.join('db/images/l1_images/a1699aaf5354891f412ffbe3d962d77a-cc_ft_384.png'))
# l1_image_5 = File.open(Rails.root.join('db/images/l1_images/c1b5e6ad73d9763543c4b320aa4cb265-cc_ft_384.png'))
  

# l1.images.attach(io: l1_image_1, filename: '9aabca900c6a5a1fd054590471662e1d-cc_ft_384.png', content_type: "image/png")
#   l1_image_1.rewind
# l1.images.attach(io: l1_image_2, filename: '22351e1ed541e65744c7b3caab7bfb15-cc_ft_384.png', content_type: "image/png")
#   l1_image_2.rewind
# l1.images.attach(io: l1_image_3, filename: 'a79eb1b9d77f186b53ff8bc50f22f506-cc_ft_384.png', content_type: "image/png")
#   l1_image_3.rewind
# l1.images.attach(io: l1_image_4, filename: 'a1699aaf5354891f412ffbe3d962d77a-cc_ft_384.png', content_type: "image/png")
#   l1_image_4.rewind
# l1.images.attach(io: l1_image_5, filename: 'c1b5e6ad73d9763543c4b320aa4cb265-cc_ft_384.png', content_type: "image/png")
#   l1_image_5.rewind



l2 = Listing.create(creator_id: u2.id, price: 1300, footage: 600, bedrooms: 1, bathrooms: 1, description: "Come check out this great 1 bed 1 bath apartment available now. This apartment is on the second floor and has plenty of kitchen space with a good sized room, laundry facilities in the basement.", date_available: Date.parse("March 08 2023"),  property_owner: 'Calibrate Real Estate', address: '785 N Marion St, APT 3, Denver, CO 80218')

# l2_image_1 = File.open(Rails.root.join('db/images/l2_images/32aff534be3d667c25d11dbe57a8ff51-cc_ft_384.png'))
# l2_image_2 = File.open(Rails.root.join('db/images/l2_images/d5eede389f52db3d1c4fb4b73f5a546b-cc_ft_384.png'))
# l2_image_3 = File.open(Rails.root.join('db/images/l2_images/d7d50caab062c03ba595109c20545012-cc_ft_576.png'))
# l2_image_4 = File.open(Rails.root.join('db/images/l2_images/f7c358c5331edd01f152924281a6d179-cc_ft_576.png'))

# l2.images.attach(io: l2_image_1, filename: '32aff534be3d667c25d11dbe57a8ff51-cc_ft_384.png', content_type: "image/png")
#   l2_image_1.rewind
# l2.images.attach(io: l2_image_2, filename: 'd5eede389f52db3d1c4fb4b73f5a546b-cc_ft_384.png', content_type: "image/png")
#   l2_image_2.rewind
# l2.images.attach(io: l2_image_3, filename: 'd7d50caab062c03ba595109c20545012-cc_ft_576.png', content_type: "image/png")
#   l2_image_3.rewind
# l2.images.attach(io: l2_image_4, filename: 'f7c358c5331edd01f152924281a6d179-cc_ft_576.png', content_type: "image/png")
#   l2_image_4.rewind

l3 = Listing.create(creator_id: u1.id, price: 5000, footage: 1500, bedrooms: 3, bathrooms: 2, description: "Three bed (one room converted to office), two bath, two car garage, large fenced in back yard with dog run. Great safe area with so much within walking distance.", date_available: Date.parse("April 10 2023"),  property_owner: 'Marissa and Matt', address: '612 N Clarkson St, Denver, CO 80218')

# l3_image_1 = File.open(Rails.root.join('db/images/l3_images/91015f6627a2138d24adfd2d92c2398e-cc_ft_768.png'))
# l3_image_2 = File.open(Rails.root.join('db/images/l3_images/5f837cde31757a4cdc2588b14a6368bc-cc_ft_384.png'))
# l3_image_3 = File.open(Rails.root.join('db/images/l2_images/d7d50caab062c03ba595109c20545012-cc_ft_576.png'))
# l3_image_4 = File.open(Rails.root.join('db/images/l3_images/1cc8607281e7320d9ff4c382f33d8417-cc_ft_384.png'))
# l3_image_5 = File.open(Rails.root.join('db/images/l3_images/cdba8ad49d27532318a8d215b63b4da6-cc_ft_576.png'))

# l3.images.attach(io: l3_image_1, filename: '91015f6627a2138d24adfd2d92c2398e-cc_ft_768.png', content_type: "image/png")
#   l3_image_1.rewind
# l3.images.attach(io: l3_image_2, filename: '5f837cde31757a4cdc2588b14a6368bc-cc_ft_384.png', content_type: "image/png")
#   l3_image_2.rewind
# l3.images.attach(io: l3_image_3, filename: 'd7d50caab062c03ba595109c20545012-cc_ft_576.png', content_type: "image/png")
#   l3_image_3.rewind
# l3.images.attach(io: l3_image_4, filename: 'd7d50caab062c03ba595109c20545012-cc_ft_576.png', content_type: "image/png")
#   l3_image_4.rewind
# l3.images.attach(io: l3_image_5, filename: 'cdba8ad49d27532318a8d215b63b4da6-cc_ft_576.png', content_type: "image/png")
#   l3_image_5.rewind


  l4 = Listing.create(creator_id: u2.id, price: 2500, footage: 1200, bedrooms: 2, bathrooms: 2, description: "NEW PRICE IMPROVEMENT 2/9/23! 2 bedroom, 2.5 bathroom townhouse in Lakewood. This quiet townhome has views of the mountains, new stainless steel Whirlpool appliances, plenty of storage, and a spacious open layout. ", date_available: Date.parse("March 10 2023"),  property_owner: 'Jessi', address: '1222 S Reed St, Lakewood, CO 80232')

# l4_image_1 = File.open(Rails.root.join('db/images/l4_images/9ddbce06f6b637c7bf5e4b58d76aed7e-cc_ft_384.png'))
# l4_image_2 = File.open(Rails.root.join('db/images/l4_images/27cc72ef310691d3ca1ddbc946120645-cc_ft_384.png'))
# l4_image_3 = File.open(Rails.root.join('db/images/l4_images/149b84ca96b04c3e2c5c7fc25eec54f2-cc_ft_576.png'))
# l4_image_4 = File.open(Rails.root.join('db/images/l4_images/947e1097263d229c363ffbb731639ce1-cc_ft_384.png'))
# l4_image_5 = File.open(Rails.root.join('db/images/l4_images/3470877d2704104bee0dba590e00b5b4-cc_ft_576.png'))


# l4.images.attach(io: l4_image_1, filename: '9ddbce06f6b637c7bf5e4b58d76aed7e-cc_ft_384.png', content_type: "image/png")
#   l4_image_1.rewind
# l4.images.attach(io: l4_image_2, filename: '27cc72ef310691d3ca1ddbc946120645-cc_ft_384.png', content_type: "image/png")
#   l4_image_2.rewind
# l4.images.attach(io: l4_image_3, filename: '149b84ca96b04c3e2c5c7fc25eec54f2-cc_ft_576.png', content_type: "image/png")
#   l4_image_3.rewind
# l4.images.attach(io: l4_image_4, filename: '947e1097263d229c363ffbb731639ce1-cc_ft_384.png', content_type: "image/png")
#   l4_image_4.rewind
# l4.images.attach(io: l4_image_5, filename: '3470877d2704104bee0dba590e00b5b4-cc_ft_576.png', content_type: "image/png")
#   l4_image_5.rewind



l5 = Listing.create(creator_id: u1.id, price: 1805, footage: 970, bedrooms: 2, bathrooms: 2, description: "The convenience and access of city living, with the comfort and ease of the suburbs. Plus, farm-to-table eating thanks to the area's selection of top-rated urban farms.", date_available: Date.parse("April 1 2023"),  property_owner: 'RedPeak', address: '3720 Parfet St, Wheat Ridge, CO 80033')

# l5_image_1 = File.open(Rails.root.join('db/images/l5_images/00bafac5a4c929720f99f321cbedd3bb-cc_ft_768.png'))
# l5_image_2 = File.open(Rails.root.join('db/images/l5_images/9952300c18fd7070052d048dd9564811-cc_ft_384.png'))
# l5_image_3 = File.open(Rails.root.join('db/images/l5_images/83119504dadf62b1dc637013d86ca965-cc_ft_384.png'))
# l5_image_4 = File.open(Rails.root.join('db/images/l5_images/eecfb726cb68a2ecbe8031aa2e0ce935-cc_ft_384.png'))



# l5.images.attach(io: l5_image_1, filename: '00bafac5a4c929720f99f321cbedd3bb-cc_ft_768.png', content_type: "image/png")
#   l5_image_1.rewind
# l5.images.attach(io: l5_image_2, filename: '9952300c18fd7070052d048dd9564811-cc_ft_384.png', content_type: "image/png")
#   l5_image_2.rewind
# l5.images.attach(io: l5_image_3, filename: '83119504dadf62b1dc637013d86ca965-cc_ft_384.png', content_type: "image/png")
#   l5_image_3.rewind
# l5.images.attach(io: l5_image_4, filename: 'eecfb726cb68a2ecbe8031aa2e0ce935-cc_ft_384.png', content_type: "image/png")
#   l5_image_4.rewind



puts 'Seeding applications'

a1 = ListApplication.create(user_id: u1.id, listing_id: l1.id)

puts "Done!"