## loop ##

k = 5
loop do
  puts k
  k += 1
  break if k == 11
end

k = 10
loop do
  puts k
  k -= 1
  break if k == 4
end

## while ##

j = 5
while j <=10 do 
    puts j
    j+= 1 
  end

j = 10
while j >=5 do 
    puts j
    j-= 1 
  end

## until ##

number = 5
until number >10 do 
    puts number
    number+= 1 
  end

number = 10
until number <5 do 
    puts number
    number-= 1 
end
## For ##

for i in 5..10
    puts i
  end

i = [10, 9,8,7,6,5]
for a in i do
    puts a
  end

## Times ##

6.times {|num| puts (num+5)}

