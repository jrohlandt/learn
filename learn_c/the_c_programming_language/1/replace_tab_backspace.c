#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int character;

    character = getchar();
    while (character != EOF) {
        if (character == '\t') {
            printf("\\t");
        } else if (character == '\b') {
            // to test backspace type hello then ctrl + H and then sir. result should be hello\bsir
            printf("\\b");
        } else if (character == '\\') {
            printf("\\\\");
        } else {
            putchar(character);
        }

        character = getchar();
    }

    printf("EOF: %d", character); // in this case ctrl + d

    return EXIT_SUCCESS;
}
