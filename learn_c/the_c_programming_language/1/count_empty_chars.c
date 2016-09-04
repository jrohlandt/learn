#include <stdio.h>

int main()
{

    int newLineCount = 0;
    int tabCount = 0;
    int blankCount = 0;
    int character;

    while ((character = getchar()) != EOF) {
        if (character == '\n') {
            newLineCount++;
        } else if (character == '\t') {
            tabCount++;
        } else if (character == ' ') {
            blankCount++;
        }
    }


    printf("New line characters: %d \n", newLineCount);
    printf("Tabs: %d \n", tabCount);
    printf("Blanks: %d \n", blankCount);
}
