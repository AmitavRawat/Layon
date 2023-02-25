/**
 * Helper class that represents the keys of the HashTable where the keys are first three letters of the month+year
 */
public class MonthYear {
    // Represents the first 3 letters of the month and the year
    // Example: April 1999 would be Apr1999
    private String monthYear;

    public MonthYear(String month, int year) {
        this.monthYear = month.substring(0,3) + year;
    }

    public String getMonthYear() {
        return this.monthYear;
    }
}