require 'open-uri'

namespace :book_data do

  task import: :environment do
    Book.all.each do |book|
      url = "https://openlibrary.org/search.json?title=#{book.title}"
      response = JSON.parse(open(url).read)
      doc = response['docs'].find { |d| d['cover_i'].present? }

      img_url = if doc
        "http://covers.openlibrary.org/b/ID/#{doc['cover_i']}-L.jpg"
      else
        'http://covers.openlibrary.org/b/ID/8346276-L.jpg'
      end

      random_rating = (1..5).to_a.sample
      book.update(cover_url: img_url, average_rating: random_rating)
    end
  end

end
