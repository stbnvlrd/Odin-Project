# for i in 0..5
#     puts "#{i} zombies incoming!"
#   end

## loop ##

k = 0
loop do
  puts "#{k} zombies incoming!"
  k += 1
  break if k == 6
end

## while ##

j = 0
while j <6 do 
    puts "#{j} zombies incoming!"
    j+= 1 
  end

## until ##

number = 0
until number >5 do 
    puts "#{number} zombies incoming!"
    number+= 1 
  end

## Times ##

6.times {|num| puts "#{num} zombies incoming!"}

## Upto Downto ##

0.upto(5) {|num| puts "#{num} zombies incoming!"}
