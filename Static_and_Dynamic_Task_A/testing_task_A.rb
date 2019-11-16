### Testing task A code:

# Carry out Static testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

  # syntax error on line 12, ; is not needed
  # class CardGame doesn't have end, syntax error
  # attr_reader and attr_accessor is missing


  def initialize(suit, value)
    @suit = suit
    @value = value;
  end

# line 18 requires double equal sings to check if the value matches with one equal sign it will just reasign the value to it
# argument is not needed for this function and card.value can be replaced by @value

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  # typing error on line 34 dif instead of def
  # , is missing on line 34 whithin the brackets between card1 and card2
  # an extra end syntax after the function which would end the class
  # card name doesn't exist it needs to return the whole card object

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

# total is not a variable with equal to 0 therefor card.value cannot be added to it
# return on line 46 will interupt the loop and it will never got to the second card in cards
# total value needs to transfered to string to be able display is as a string

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
