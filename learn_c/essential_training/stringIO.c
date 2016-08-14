#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char name[20];
    char address[30];
    char rating;

    printf("What is your rating on a scale of 1-10?");
    rating = getchar();

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter your address: ");
    scanf("%s", address);

    printf("Entered name is: %s\n", name);
    printf("Entered address is: %s\n", address);

    printf("Did you say a %c is what they rate me? \n", rating);

    return EXIT_SUCCESS;
}
