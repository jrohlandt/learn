#include <stdio.h>

int main(void)
{
    int aNumber;

    printf("Please enter a number: ");
    scanf("%d", &aNumber);
    printf("You entered %d", aNumber);
    getchar();

    return 0;
}
