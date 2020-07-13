=begin
run_code_inside = TRUE
puts "Code before if...end"

if run_code_inside
  puts "code inside"
end
puts "code after if...end"


chance_of_rain = 1000
puts "let's go outside!"
if chance_of_rain <= 0.25
  puts "Pack a sun shelter!"
elsif (chance_of_rain > 0.25 && chance_of_rain < 0.75)
  puts "Pack an umbrella"
else
  puts "Stay home an eat a bagel"
end
puts "Oh, and always wear sunscreen, unless you are on a coast that prohibits it due to coral reef damage laws"
=end

this_year = Time.now.year

puts "Hey, its not 2019 anymore! It is #{this_year}" if this_year > 2019

while true do
  puts "hello world"
end