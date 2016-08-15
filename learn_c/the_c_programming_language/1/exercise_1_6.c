#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int c;
    c = getchar();
    while (c != EOF) {
        putchar(c);
        c = getchar();
    }

    printf("EOF: %d", c); // in this case ctrl + d

    return EXIT_SUCCESS;
}
