require("minitest/autorun")
require("minitest/rg")
require("pry-byebug")
require_relative("../testing_task_B.rb")

class CardGameTest < MiniTest::Test

  def setup
    @card1 = CardGame.new('clubs', 1)
    @card2 = CardGame.new('diamonds', 1)
    @card3 = CardGame.new('diamonds', 8)

    @cards = [@card1, @card2, @card3]
  end

  def test_checkforAce__card1
    assert_equal(true, @card1.checkforAce)
  end

  def test_checkforAce__card2
    assert_equal(true, @card2.checkforAce)
  end

  def test_checkforAce__card3
    assert_equal(false, @card3.checkforAce)
  end

  def test_highest_card__first_higher
    result = CardGame.highest_card(@card1, @card3)
    assert_equal(@card3, result)
  end

  def test_highest_card__second_higher
    result = CardGame.highest_card(@card3, @card1)
    assert_equal(@card3, result)
  end

  def test_cards_total
    result = CardGame.cards_total(@cards)
    assert_equal(10, result)
  end

  # binding pry
  # nil

end
