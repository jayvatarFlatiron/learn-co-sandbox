results = {
  :race_name => "Kentucky Derby",
  :year => 2019,
  :winners => [
    {
      :horse_name => "Country House",
      :trainer => "William I. Mott",
      :margin => 1.75
    },
    {
      :horse_name => "Code of Honor",
      :trainer => "Claude R. McGaughey",
      :margin => 2.5
    },
    {
      :horse_name => "Tacitus",
      :trainer => "William I. Mott",
      :margin => 3.25
    }
  ]
}

value = results[:winners][-1] === results[:winners].last

value2 = results[:winners][0] == results[:winners].first

puts value

puts value2