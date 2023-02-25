import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

/**
 * Converts csv to json
 */
public class LayHash {

    /**
     * Helper class that emulates a hashtable
     * @param <MonthYear> month and year of an object
     * @param <State> the State
     */
    private static class Entry<MonthYear, State> { // want entry to hold data types
        public MonthYear key;
        public State value;

        public Entry(MonthYear key, State value) {
            this.key = key;
            this.value = value;
        }
    }

    private File file; // The csv file that needs to be converted to json
    protected Entry<MonthYear, State>[] hashtable;
    private int capacity;

    @SuppressWarnings("unchecked")
    public LayHash(String fileName, int capacity) {
        hashtable = (Entry<MonthYear, State>[]) new Entry[capacity];
        this.capacity = capacity;
        this.file = new File(fileName);
    }

    public int getCapacity() {
        return capacity;
    }


    public void add() throws FileNotFoundException {
        Scanner sc = new Scanner(file);

        while(sc.hasNextLine()) {
            String[] splitParts = sc.nextLine().split(",");
            MonthYear monthYear = new MonthYear(splitParts[0], Integer.parseInt(splitParts[1]));
            int index = Math.abs(monthYear.hashCode()%getCapacity());


        }

    }


}
