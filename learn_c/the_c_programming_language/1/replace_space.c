#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int character;
    int prev_character = 'a'; // 'a' is just a placeholder, it has no meaning

    character = getchar();
    while (character != EOF) {
        if ((character != ' ') || (prev_character != ' ')) {
            putchar(character);
        }

        prev_character = character;
        character = getchar();
    }

    printf("EOF: %d", character); // in this case ctrl + d

    return EXIT_SUCCESS;
}
