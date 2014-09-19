# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(@board, :id, :title, :created_at, :updated_at)
#
lists = (@board.lists ? @board.lists : nil)
# #maybe have to order by ord?
unless lists.nil? || lists.empty?
	json.lists(lists) do |list|
    json.(list, :id, :title, :created_at, :updated_at)
	end
end