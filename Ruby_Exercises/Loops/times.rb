# 5.times do
#     puts "Hello, world!"
#   end

## loop ##

k = 5
loop do
  puts "Hello, world!"
  k += 1
  break if k == 10
end

# ## while ##

j = 5
while j <10 do 
    puts "Hello, world!"
    j+= 1 
  end

## until ##

number = 1
until number >5 do 
    puts "Hello, world!"
    number+= 1 
  end

## For ##

for i in 1..5
    puts "Hello, world!"
  end

## Upto Downto ##

5.times {|num| puts "Hello, world!"}
