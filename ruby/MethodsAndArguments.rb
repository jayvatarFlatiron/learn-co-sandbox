=begin
def greeting_a_person(name)
  puts "hello #{name}!"
  name = "henry"
  puts "hello #{name}!"
end

somename = "Maria"
greeting_a_person(somename)

puts somename

=end

def greeting_programmer(name, language)
  puts "hello, #{name}. We heard you are a great #{language} programmer."
end

greeting_programmer("Larry", "C++")