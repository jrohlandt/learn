defmodule Math do
    def sum(a, b) do
        a + b
    end

    def zero?(x) when is_integer(x) do
        case x do
            0 -> true
            _ -> false
        end
    end
end
