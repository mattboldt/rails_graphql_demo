module Types
  class BookType < Types::BaseObject
    field :title, String, null: false
    field :cover_url, String, null: true
    field :average_rating, Integer, null: true
  end
end
