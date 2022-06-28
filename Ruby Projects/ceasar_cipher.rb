    def caesar_cipher(text, key)
      alphabet_lower = 'abcdefghijklmnopqrstuvwxyz'
      alphabet_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      
      text.each_char.with_index do |char, index|
        if alphabet_lower.include? char
          new_index = alphabet_lower.index(char) + key
          while new_index > 25
              new_index = new_index - 26
          end
         text[index] = alphabet_lower[new_index]
        end
        if alphabet_upper.include? char
          new_index = alphabet_upper.index(char) + key
          while new_index > 25
              new_index = new_index - 26
          end
         text[index] = alphabet_upper[new_index]
        end
      end
      return text
    end

  puts caesar_cipher('Hello, World!', -55)