#include <stdio.h>

int main()
{
    long charCount;

    for (charCount = 0; getchar() != EOF; ++charCount)
        ;

    printf("%ld\n", charCount);

}
