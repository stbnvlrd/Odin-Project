# i = 0
# loop do
#   puts "i is #{i}"
#   i += 1
#   break if i == 10
# end

## While ##

i = 0
while i < 10 do
 puts "i is #{i}"
 i += 1
end

## Until ##

i = 0
until i >= 10 do
  puts "i is #{i}"
  i += 1
end

## For ##

for i in 0..9
    puts "i is #{i}"
  end

## Times ##

10.times {|num| puts "i is #{num}"}

## Upto Downto ##

0.upto(9) {|num| puts "i is #{num}"}
