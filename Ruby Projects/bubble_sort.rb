def bubble_sort(number_array)
    last_digit = number_array.length - 1
    while last_digit > 1
        (0..(last_digit -1)).each do |index|
            # puts (index)
            if number_array[index] > number_array[index + 1].to_i
            number_array.insert(index+1, number_array.delete_at(index))
            # puts number_array
            end
        end
        last_digit = last_digit - 1
    end
  return number_array
end

puts bubble_sort([4,3,78,2,0,2,8,10,2,100,1])