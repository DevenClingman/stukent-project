class Post < ApplicationRecord

  validates_presence_of :title, :body, :factorial
  after_initialize :set_defaults

  def set_defaults
    self.factorial = set_factorial
  end

  private

  def set_factorial
    total = 0
    num = 1 + rand(10)
    if num == 1
      total = 1
      return total
    end
    total = num * num.pred
    while num.pred > 1
      total = total * (num.pred - 1)
      num -= 1
    end
    total
  end
end
