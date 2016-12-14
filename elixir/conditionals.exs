case {1, 2, 3} do
    {4, 5, 6} ->
        IO.puts "no match"
    {1, x, 3} ->
        IO.puts "match"
    _ ->
        IO.puts "default"
end

x = 0;
case {1,2,3} do
    {1, x, 3} when x > 1 -> # this x (x > 1) has nothing to do with the variable x above
        IO.puts x
    {1, ^x, 3} when x > 1 ->
        IO.puts x
    _ ->
        IO.puts "default"
end
