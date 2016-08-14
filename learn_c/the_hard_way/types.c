#include <stdio.h>

int main(int argc, char *argv[])
{
    int distance = 100;
    float power = 2.345f;
    double super_power = 56789.4532;
    long universe_of_defects = 1L * 1024L * 1024L * 1024L;
    char initial = 'B';
    char first_name[] = "Ezekiel";
    char last_name[] = "Figuero";

    printf("This is %s %c %s and I walked %d miles. \n", first_name, initial, last_name, distance);
    printf("And I have %f levels of power but, I am working towards %f.\n", power, super_power);
    printf("Universe of defects: %ld \n", universe_of_defects);

    return 0;
}
