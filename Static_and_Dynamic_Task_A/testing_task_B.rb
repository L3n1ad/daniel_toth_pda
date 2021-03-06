### Testing task B code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value;
  end

  def checkforAce
    if @value == 1
      return true
    else
      return false
    end
  end

  def self.highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    else
      card2
    end
  end

def self.cards_total(cards)
  total = 0
  for card in cards
    total += card.value
  end
  return total
end

end
