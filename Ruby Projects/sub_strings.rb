dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

  def substrings(text, dict)
    count_dict = Hash.new(0)
    dict.each do |word|
      word_count = text.downcase.scan(word).length
      if word_count > 0
          count_dict[word] = word_count
      end
    end
    return count_dict
  end

  puts substrings("below", dictionary)
  puts substrings("Howdy partner, sit down! How's it going?", dictionary)

