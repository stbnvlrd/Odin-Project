def stock_picker(stock_days)
    buy_day = 0
    sell_day = 0
    (0..(stock_days.length-1)).each do |index|
        # puts ("index = " + index.to_s)
        (index..(stock_days.length)).each do |day|
        #   puts ("day = " + day.to_s)
          if (stock_days[day].to_i - stock_days[index].to_i) > (sell_day-buy_day)
            puts ("index = " + index.to_s)
            puts ("day = " + day.to_s)
            buy_day = stock_days[index]
            sell_day = stock_days[day]
          end
        end
      end
    return [buy_day, sell_day]
  end

  puts stock_picker([17,3,6,9,15,8,6,1,10])